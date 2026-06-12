#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

echo "=== Building ==="
npm run build

echo "=== Staging changes ==="
git add -A

if git diff --cached --quiet; then
  echo "Nothing to commit."
  exit 0
fi

echo "=== Commit ==="
read -r -p "Commit message: " msg
git commit -m "${msg:-Update}"

echo "=== Push to origin/main ==="
git push origin main
