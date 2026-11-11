# Tooling dependency maintenance

The lockfile includes the security updates checked on 2026-11-11. Install it
with `npm ci`; do not regenerate it on the deployment server.

ESLint 10.14.0 and typescript-eslint 8.72.2 still request minimatch 10.
A single override selects minimatch 11.0.1, shared by its three consumers:
ESLint, its config-array package, and the TypeScript parser. This is the patched release for
[GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249).
The override crosses a major version boundary and must remain covered by lint
checks. Remove this override when the upstream packages request a fixed
version themselves, then run `npm ci`, `npm run lint`, `npm run build`,
`npm run check:content`, and `npm audit` again.

These are build/lint dependencies. The final Docker stage copies the built
static files into Nginx; it does not include Node or node_modules. npm audit
does not scan the Nginx/Alpine runtime image.
