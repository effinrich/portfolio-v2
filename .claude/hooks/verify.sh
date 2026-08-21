#!/usr/bin/env bash
# Claude Code Stop hook: verify the project after the agent finishes editing.
#
# Runs typecheck, lint, and the full test suite (unit + story play functions
# + coverage). On failure it prints to stderr and exits 2, which tells Claude
# Code to feed the output back to the model so it can continue fixing.

set -uo pipefail

step() { printf '\n▶ %s\n' "$1" >&2; }

step "typecheck"
if ! bun run typecheck; then
  printf '\n✖ typecheck failed\n' >&2
  exit 2
fi

step "lint"
if ! bun run lint; then
  printf '\n✖ lint failed\n' >&2
  exit 2
fi

step "test (unit + story play functions + coverage)"
if ! bun run test; then
  printf '\n✖ tests failed\n' >&2
  exit 2
fi

printf '\n✔ verify passed: typecheck + lint + tests\n' >&2
exit 0
