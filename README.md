# MVČR web developer kit for static pages

## Installation
- make sure you have `node` and `npm`/`yarn` installed
- run `yarn install` to install all dependencies (you can use npm instead of yarn)

## Web development
- run `yarn start` to start development server
- application will start on http://localhost:8080/ (if it's possible, browser will start automatically)
- every input file is located in `src` folder
- place all pages you want to develop inside `src/pages` folder. You have to restart webpack server when you add new page.
- to create your custom css/scss files just insert them anywhere inside src folder. You only have to import them in `src/index.js`.
- `src/template.js` contains imports of default template scss/css
- Javascript can be placed directly inside `src/index.js`
- if you make any changes to html/scss/js files, webpack will hot-reload the browser
- `src/components` contains common parts of html pages

## Build
- `yarn build`
- inside `build` folder you'll find built html pages with common minifed .css and .js files.

## Tools

<div align="left">
  <a href="https://webpack.js.org/">
    <img width="100" height="100" src="https://webpack.js.org/assets/icon-square-big.svg">
    <p> webpack.js.org </p>
  </a>
</div>
