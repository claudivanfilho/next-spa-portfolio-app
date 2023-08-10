![jest workflow](https://github.com/claudivanfilho/next-spa-portfolio-app/actions/workflows/tests.yaml/badge.svg)

## Next 13 SPA Sample App

[![Node.js](https://img.shields.io/badge/Node.js-18-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-13-blueviolet)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-007ACC)](https://www.typescriptlang.org/)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-38B2AC)](https://tailwindcss.com/)
[![Internationalization](https://img.shields.io/badge/Internationalization-React%20Intl-blueviolet)](https://github.com/formatjs/react-intl)

Technologies and Concepts Utilized in This Project:

- Next 13 + React 18 + Typescript + Tailwind
- i18n With `react-intl`
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) Tests
- Continuous Integration - Github Actions
- Branch Preview With Vercel Configured
- SWR Cache Strategy
- MSW Server Mocking Strategy

## General App Strategy

This app is a sample application of a Single Page Application (SPA) using Next.js, as recommended by [react.dev](https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks), for initiating a new project. The project aims to utilize only React features and not Next.js features, with the intent of focusing on front-end skills.

The app uses an immutable API called [POKE API](https://pokeapi.co/), and for caching requests and optimizing website performance, I have chosen to adopt the MSW cache strategy.

#### Navigation

In this app, I am using the `react-router-dom` library to handle routes and layouts. All the existing routes can be observed in the `App.tsx` file.

#### Internationalization

For internationalization, I am utilizing `react-intl` along with automatic language detection, provided in the `LocaleContext` file.

#### State Management

For state management, I am using the React Context API with custom hooks to be used inside my components. The only things necessary for global state management are the `intl` and `locale`.

## Folder Structure

<pre>
📂.github // Github Actions workflows are defined here
📂src 
 ┣ 📂__mocks__ // All the mocks necessary for the test environment
 ┣ 📂__tests__ // All Jest tests are managed here
 ┣ 📂app // All the SPA components logic are defined here
  ┣ 📂components // All components are defined here, categorized into general components at the root of the folder, and specific page components for each application page
  ┣ 📂config // Configuration files, including constants, are defined here
  ┣ 📂context // React Context Providers are defined here 
  ┣ 📂hooks // React custom hooks are defined here 
  ┣ 📂models // Typescript types are defined here
  ┗ 📂services // The layer responsible for fetching and processing external data is defined here
 ┣ 📂pages // The initial page for the next configuration purpose is defined here
 ┗ 📂lang // Internationalization (react-intl) strings for each language are defined here
</pre>

## Testing strategy

In all of my Front End projects (SPAs), I prefer to follow the [testing trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications) strategy, which prioritizes [integrated tests over unit tests](https://kentcdodds.com/blog/write-tests).

All test cases are behaviorally oriented, following the principles of [Behavior-Driven Development (BDD)](https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2), with a focus on capturing user interactions with the system.

## Development

Install the dependencies

```bash
npm install
# or
yarn install
```

Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
