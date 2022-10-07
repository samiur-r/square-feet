# Boshamlan

## Features

- ▲ Based on latest [Next.js](https://github.com/zeit/next.js)
- 💅 Styling with [TailwindCSS](https://tailwindcss.com/)
- ✳️ Hooks for fetching, caching and updating asynchronous data in React [React Query](https://react-query.tanstack.com)
- 🐻 Hooks based state management library[Zustand](https://github.com/pmndrs/zustand)
- 🐐 Unit testing with [Jest](https://github.com/facebook/jest) & [react-testing-library](https://github.com/testing-library/react-testing-library)
- ⚡️ E2E testing with [Cypress](https://www.cypress.io/)

### Design Patterns

- ⛔ **[ESLint](https://eslint.org)** – Find and fix problems in your JavaScript code. Following Airbnb style guide.
- 🎀 **[Prettier](https://prettier.io)** – An opinionated code formatter, supporting multiple languages and code editors
- 🐺 **[Husky](https://github.com/typicode/husky)** – Modern native Git hooks made easy
- 💩 **[lint-staged](https://github.com/okonet/lint-staged)** – Run linters against staged git files and don't let 💩 slip into your code base
- 📓 **[commitlint](https://commitlint.js.org)** – Helps your team adhering to a commit convention

## Getting started

```
git clone https://github.com/q8villa/boshamlan2023.git
cd boshamlan2023
yarn install
yarn run dev
```

Then open `http://localhost:3000/` to see the app.

### build

Builds the production application in the .next folder.

```bash
yarn run build
```

### start

Starts the application in production mode.

```bash
yarn run start
```

### lint

Runs ESLint static code analysis based on your `.eslintrc` configuration

```bash
yarn run lint
```

### test

Runs Jest unit tests to validate changes between commits

```bash
yarn run test
```

### Contributing

- Create a new branch from 'develop' with a standard name(e.g. feat/create-x-feature, hotfix/x-bug).
- Code, test, commit and push your branch. Create a PR into 'develop'.
- Ask for PR review from an appropriate reviewer.
