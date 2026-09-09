# Coding Agent Guidelines

## Core principle

Make the smallest correct change that fits the existing architecture. Inspect relevant code before
editing, reuse established patterns, avoid unrelated refactors, and do not change behaviour
silently.

## Project

- **Name:** Afrinoverse Ecosystem Launch
- **Purpose:** Public-facing launch and partnership website for the Afrinoverse ecosystem
- **Primary stack:** React 19, TypeScript, Vite 6, Tailwind CSS 4, Motion
- **Package manager:** npm (use `npm ci` when installing from the lockfile)
- **Persistence and backend:** None; this is a client-only static site

## Important commands

```bash
npm ci
npm run dev
npm run test
npm run lint
npm run format:check
npm run typecheck
npm run build
npm run check
```

## Architecture and boundaries

```text
src/
  components/  Page sections and interactive modals
  data/        Typed, static product and ecosystem content
  test/        Shared test setup
  App.tsx      Page composition and cross-section UI state
  index.css    Tailwind import, design tokens, and global styles
  types.ts     Shared domain and component data types
```

- Keep display content in `src/data` when it is shared or structurally repeated.
- Keep UI state close to the component that owns it; cross-section state belongs in `App.tsx`.
- Keep components focused and preferably below roughly 500 lines. Split by responsibility, not an
  arbitrary line-count target.
- Preserve type safety at component boundaries. Do not introduce `any` to bypass a design issue.
- Do not add a backend, API integration, state-management framework, or dependency without a current
  requirement.
- Treat every `VITE_` environment variable as public browser data. Never place a secret in one.
- Preserve accessibility: keyboard operation, focus handling, labels, semantic controls, reduced
  motion expectations, and meaningful image alternatives.

## Tests and verification

Behaviour changes should include focused tests for important success, failure, and edge paths. Never
weaken or skip tests merely to obtain a passing run. Run the narrowest relevant check first, then
`npm run check` before completion. A clean type check alone does not prove the production build
works.

Before completing a change:

1. Trace the affected user flow end to end.
2. Review the diff and relevant configuration.
3. Test the normal path, failure path, and likely abuse path.
4. Run the same checks CI runs.
5. Report concrete risks and anything not verified.

## Scope, security, and maintainability

- Validate user-controlled input at its boundary and handle browser/network APIs as fallible.
- Do not log or commit credentials, tokens, personal data, or form submissions.
- Avoid unsafe HTML injection, untrusted navigation targets, and inaccessible click-only controls.
- Keep dependency additions deliberate and review maintenance, license, bundle, and security impact.
- Do not rename, reformat, upgrade, or remove unrelated code during focused work.
- Update documentation when setup, commands, boundaries, or deployment change.

## Definition of done

A task is complete when the requested behaviour is implemented, relevant tests and `npm run check`
pass, the final diff contains no accidental changes, documentation is current, and remaining risks
or unverified assumptions are reported.
