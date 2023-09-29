# Tucows Coding Challenge

This project was the result of almost 4 days of coding time all told, since there was unavoidable vacation time during the development week!

There was a learning curve but the overall result is a functioning application!

Tooling:
Used HTML, CSS/SCSS, JavaScript, Vue and Pinia.

The following are the detailed features for the web application I created that allows users to browse and search for products using an mocked JSON API.

1. It displays a list of products on the home page by fetching the data from the api using a helper fetch function found at 'src/services/api/fetchProducts'. It then uses a series to vue components built with atomic structure in mind to render te products to the homepage as per designs and with all the product data properties displayed.

2. It implements an initial search functionality allowing users to search for products by name.

3. It shows a product details page when a product is clicked from the products results list.

4. It follow UI/UX design and styling set out in the designs in Figma, allowing for global css variables to be extracted into the 'src/styles/base.css' system of organization. Styles are otherwise found in their respective style tags inside the vue component files.

5. It has responsive design, and was built specifically for desktop down to mobile screen sizes.

## Project Setup

Navigate to the route of the project and run.

```
npm install
```

### Branch

Select the 'main' branch for what I was able to accomplish in the 23 hours of working time I had within the 40hour/5day criteria.
Select the 'better-code-now-that-i-have-time' branch (excuse my informal branch namingg convention, its more fun than "Feature/code-improvements")for more completed features and general updates I will be making as I find time on vacaction here.

### Frontend Compile and Hot-Reload for Development

Launch the front end server with this cmd, leave this running in a terminal.

```
npm run dev
```

### Backend Launch JSON API

In a separate terminal run this command to launch the API and leave this running.

```
npm run backend
```

Note please ensure that both the Front End and Back End scripts must both be running to view application.

### Run Unit Tests with [Vitest](https://vitest.dev/)

This command will show the passing test suites and test coverage.

```
npm run test:unit
```

TODOs:

- Use form validation from package instead of custom with toast.
- Refctor buttons and icons to share base component, add click ability on icons without duplication and reduce code.
- Programatically add the product status to the data.
- Refactor modal and make modal dynamic, display name of product clicked at least.
- Build out more error handling for components and search functionality.
- Finish test suites.
- Extract more duplication of css into variables and mixins.
- Finish implementing typescript.
- Finish build steps.
- Login/Auth.

ACCOMPLISHED over the last 2 days (approximately 10 hours spent):

- Added basic search querying, with basic search handling and a fallback for 0 results.
- Made the price filter functional, which resets on a blank query to return all results ( for the purposes of this application currently)
- Made the filtering on data table more genaric and easily scalable to other columms.
- Refactored componennts to remove duplication for desktop and mobile.
- Refactored components to manage the atomic structure better and clean templates
- Added baseIcon to the global registration
- Refactored icons to be components
- Added mobile helper (based on width not query agent for the purposes of this app currently)
- Added modal helper to better manage the modal after refactor.
- Added getters in store to handle the filter by price.
- Updated the initial tests on api call, store, and rendered products
