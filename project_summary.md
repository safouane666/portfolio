# Project Summary

This project is a React and TypeScript application, built with Vite. It serves as a portfolio website, as indicated by the `homepage` field in `package.json` and the `base` configuration in `vite.config.mjs`.

## Key Technologies and Libraries:

*   **Frontend Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **UI Library:** Mantine (`@mantine/core`, `@mantine/hooks`, `postcss-preset-mantine`)
*   **Routing:** `react-router-dom` (planned, based on previous interaction)
*   **Styling:** PostCSS with `postcss-preset-mantine`, CSS Modules (`.module.css`)
*   **Icons:** `@tabler/icons-react`, `@mantinex/dev-icons`
*   **Email Integration:** `@emailjs/browser`
*   **Typing Animation:** `react-simple-typewriter`

## Development Tools and Practices:

*   **Testing:** Vitest with React Testing Library (`vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`)
*   **Linting:** ESLint (`eslint`, `@typescript-eslint/eslint-plugin`, `eslint-config-mantine`, `eslint-config-airbnb`, `eslint-config-airbnb-typescript`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `eslint-plugin-react-hooks`) and Stylelint (`stylelint`, `stylelint-config-standard-scss`)
*   **Code Formatting:** Prettier (`prettier`)
*   **Component Documentation/Development:** Storybook (`@storybook/react`, `@storybook/addon-essentials`, `@storybook/addon-interactions`, `@storybook/addon-links`, `@storybook/blocks`, `@storybook/testing-library`, `storybook-dark-mode`)
*   **Module Resolution:** `vite-tsconfig-paths` for handling TypeScript path aliases.
*   **Version Control Integration:** Configured for GitHub Pages deployment (`gh-pages`).

## Project Structure Highlights:

*   `src/`: Contains the main application source code.
    *   `src/App.tsx`: Main application component.
    *   `src/main.tsx`: Entry point for the React application.
    *   `src/theme.ts`: Mantine theme configuration.
    *   `src/components/`: Reusable UI components (e.g., `AboutCards`, `ColorSchemeToggle`, `Header`, `Hero`, `Social`, `Switch`).
    *   `src/imgs/`: Image assets.
    *   `src/pages/`: Application pages (e.g., `Home.page.tsx`, `About/About.tsx`, `Contact/Contact.Page.tsx`, `Education/Education.tsx`, `WebDev/WebDev.page.tsx`).
*   `.storybook/`: Storybook configuration.
*   `test-utils/`: Utilities for testing.
*   `.github/workflows/`: GitHub Actions for CI/CD (e.g., `npm_test.yml`).

## Build and Deployment:

*   The `build` script compiles the TypeScript code and bundles the application using Vite.
*   The `predeploy` and `deploy` scripts are configured to deploy the built application to GitHub Pages.

## Next Steps (based on previous interaction):

*   Implement `react-router-dom` for navigation between `Home`, `About`, and `Contact` pages.
*   Create `Router.tsx` in `src/`.
*   Modify `App.tsx` to use the `Router`.
*   Ensure `HomePage.tsx`, `AboutPage.tsx`, and `ContactPage.tsx` are properly integrated.
