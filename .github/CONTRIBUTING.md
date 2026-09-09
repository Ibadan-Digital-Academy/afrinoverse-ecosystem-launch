# Contributing

## Workflow

Use short-lived branches from `main`, such as `feat/partner-form-validation` or
`fix/mobile-navigation-focus`. Open a pull request back to `main`; do not push feature work directly
to the protected branch.

Before opening a pull request:

```bash
npm ci
npm run check
npm run security:cve
```

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(<scope>): <short description>
```

Common types are `feat`, `fix`, `docs`, `refactor`, `test`, `perf`, `ci`, and `chore`. Useful scopes
for this repository include `ui`, `content`, `navigation`, `products`, `partners`, `legal`, `a11y`,
`deps`, and `infra`.

## Pull requests

- Keep each pull request focused on one concern.
- Complete the pull request template and attach screenshots for visual changes.
- Add or update tests for behaviour changes.
- Require passing CI and at least one review before merging.
- Give extra scrutiny to personal-data handling, third-party resources, dependencies, and deployment
  configuration.

## Security and privacy

Never commit secrets, credentials, or personal data. Values prefixed with `VITE_` are embedded in
the public client bundle and cannot safely hold secrets. Use GitHub's private vulnerability
reporting flow for security issues; do not open a public issue.
