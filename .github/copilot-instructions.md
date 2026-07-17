# GitHub Copilot Best Practices

## Build Commands

- `bun run build` - Build the project
- `bun run test` - Run all tests
- `bun run lint:fix` - Fix linting issues
- `bun run format` - Fix formatting

## Code Style

- Use TypeScript strict mode
- Prefer functional components over class components
- Always add JSDoc comments for public APIs

## Workflow

- Run `bun run lint:fix && bun run test` after making changes
- Commit messages follow conventional commits format
- Create feature branches from `main`
- Never commit placeholder GitHub Action refs (for example TODO markers, incomplete SHAs, or temporary values); keep last-known-good CI/tooling refs unless the replacement has been verified.
