import { createServer } from "node:http";
import { URL } from "node:url";
import { readFileSync, existsSync } from "node:fs";
import { extname, join } from "node:path";
import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";

const handler = createStartHandler(defaultStreamHandler);

async function handleRequest(request: Request): Promise<Response> {
  try {
    return await handler(request);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export default { fetch: handleRequest };

if (process.env.NODE_ENV === "production") {
  const MIME_TYPES: Record<string, string> = {
    ".js": "application/javascript",
    ".css": "text/css",
    ".html": "text/html",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".json": "application/json",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".txt": "text/plain",
    ".ico": "image/x-icon",
  };

  const CLIENT_DIR = join(process.cwd(), "dist", "client");

  function serveStatic(
    urlPath: string
  ): { status: number; headers: Record<string, string>; content: Buffer } | null {
    let resolvedPath = urlPath;

    if (resolvedPath.endsWith("/")) {
      resolvedPath += "index.html";
    }

    const filePath = join(CLIENT_DIR, resolvedPath.replace(/^\//, ""));
    if (existsSync(filePath) && extname(resolvedPath)) {
      const contentType = MIME_TYPES[extname(filePath)] || "application/octet-stream";
      const content = readFileSync(filePath);
      return {
        status: 200,
        headers: {
          "content-type": contentType,
          "content-length": String(content.length),
          "cache-control": "public, max-age=31536000, immutable",
        },
        content,
      };
    }

    return null;
  }

  const server = createServer(async (req, res) => {
    if (!req.url) {
      res.writeHead(400);
      res.end();
      return;
    }

    const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

    const staticPath = url.pathname.replace(/^\/editor\//, "/");
    const staticResult = serveStatic(staticPath);
    if (staticResult) {
      res.writeHead(staticResult.status, staticResult.headers);
      res.end(staticResult.content);
      return;
    }

    const headers: Record<string, string> = {};
    for (const [key, value] of Object.entries(req.headers)) {
      if (typeof value === "string") headers[key] = value;
      else if (Array.isArray(value)) headers[key] = value.join(", ");
    }

    const request = new Request(url, {
      method: req.method,
      headers,
      body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
    });

    try {
      const response = await handleRequest(request);
      res.writeHead(response.status, Object.fromEntries(response.headers));
      if (response.body) {
        const reader = response.body.getReader();
        const pump = () => {
          reader.read().then(({ done, value }) => {
            if (done) {
              res.end();
              return;
            }
            res.write(value);
            pump();
          });
        };
        pump();
      } else {
        res.end();
      }
    } catch (error) {
      console.error(error);
      res.writeHead(500);
      res.end();
    }
  });

  const port = parseInt(process.env.PORT || "3000", 10);
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}
