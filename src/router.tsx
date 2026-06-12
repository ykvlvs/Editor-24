import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    basepath: "/editor",
    context: { queryClient },
    defaultPreload: "intent",
  });
  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
