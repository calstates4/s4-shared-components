# Shared components for CSU S4 Frontend Sites

Components for Remix sites, implemented using [Material UI](https://mui.com/) 5.12

[View the deployed storybook instance](https://main--64d42666175ed1920d3d7701.chromatic.com)

## Requirements

- Node 18

## Local development on the shared components library itself

- Clone the repository
- Run `nvm use` or use a tool such as [AVN](https://github.com/wbyoung/avn) to
automatically switch to the correct Node version
- Run `npm install`
- Run `npm run dev` to start storybook and the Typescript compiler.

## Troubleshooting

- If you hit `Importing a module script failed.`
- Then try `rm -rf node_modules` and all of the steps above again.
- Also try disabling browser cache on your network tab of your browser's
inspector.

## Local development on a Remix FE site that uses the shared components:

- Clone the repository
- Run `nvm use` or use a tool such as [AVN](https://github.com/wbyoung/avn) to
automatically switch to the correct Node version
- Run `npm install`
- Link the dependencies:

```bash
npm run link-all [FE-SITE-PATH]
```

Example:

```bash
npm run link-all ../s4-app-partners
```

- In root directory of the FE site that uses the shared components, link the package:

```bash
npm link s4-shared-components
```

- For changes to be picked up you must make sure you include exports for any new
components in the `index.ts` file in the `src` of the shared components library.
- After that run `npm run dev` in the shared components library first.
- Then run `npm run dev` in the FE site that uses the shared components library.
