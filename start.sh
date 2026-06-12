#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
DEFAULT_PORT=3001

port="$DEFAULT_PORT"
if lsof -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; then
  port=$( (lsof -iTCP -sTCP:LISTEN -Fn -P 2>/dev/null | grep -oP '(?<=n\*:)\d+' || true) | sort -n | {
    used=$(cat -)
    for p in $(seq 3001 3099); do
      echo "$used" | grep -qF "$p" || { echo "$p"; exit 0; }
    done
    echo "ERROR: no free port 3001-3099" >&2
    exit 1
  })
fi

echo "Starting Editor-24 on http://localhost:$port"
export PORT="$port"
export NODE_ENV=production
exec node "$ROOT_DIR/dist/server/server.js"
