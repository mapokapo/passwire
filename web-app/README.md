This is a [Next.js](https://nextjs.org/) template bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Project Structure

Next.js pages go in `pages/`.

Reusable React components go in `components/`.
If you have components that make up other components, but don't have any meaning on their own, they should go into `partials/`.

Images, SVGs, audio files, and any other media files that need to be available to the client should be put in `public/`.

Config files, stylesheets, themes, and other constant data that needs to be shared across multiple pages/components go in `shared/`.

Testing files go in `test/`;

## Tooling

[ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) are built in, along with some rules that enforce best practices which you can customize.
React, Typescript, a11y, and Next.js plugins for ESLint are also correctly configured.

All of the code in this template uses [Typescript](https://www.typescriptlang.org/) exclusively.

This project is set up with [TailwindCSS](https://tailwindcss.com/) and [Stylelint](https://stylelint.io/) for custom utilities or extracted components.

Note: testing libraries are not included as Next.js project vary wildly in implementation. If you want testing, you can install a library like Jest along with the Typescript typings. You will need to provide your own Jest config, but ESLint rules for Jest are already included.
