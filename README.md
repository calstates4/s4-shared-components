# Shared components for CSU S4 Frontend Sites

Components for Remix sites, implemented using [Material UI](https://mui.com/) 5.12

[View the deployed storybook instance](https://main--64d42666175ed1920d3d7701.chromatic.com)

## Requirements

- Node 18

## Local development

- Clone the repository
- Run `npm install`
- If also developing features in a Remix FE site, you need to link the dependencies:

```bash
npm run link-all [FE-SITE-PATH]
```

- In root directory of the FE site that uses the shared components, link the package:

```bash
npm link s4-shared-components
```

- Run `npm run dev` to start storybook and the Typescript compiler in watch mode.
