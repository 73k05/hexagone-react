/**
 * re-export files as a  React,treat each React Component as a module itself.
 * webpack can't find module if file named jsx, or, you can include .jsx in the extensions that webpack should resolve without explicit declaration: module.exports = { entry: './index.jsx', output:  index.js may resolve to another file if defined in the package.json. /abc/node_modules may resolve in /node_modules too. resolve.alias takes precedence over other module resolutions.
 * Resolve, These options change how modules are resolved. webpack provides reasonable defaults, index.js may resolve to another file if defined in the package.json . Webpack doesn't know to resolve.jsx files implicitly. You can specify a file extension in your app (import App from './containers/App.jsx';). Your current loader test says to use the babel loader when you explicitly import a file with the jsx extension.
 */
export * from "./Counter";
