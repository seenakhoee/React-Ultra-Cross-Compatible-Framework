# React Ultra

React Ultra is a convention and collection of React for Web components that is compatible with React Native. Unlike react-native-web and similar projects, it uses CSS Modules instead of JavaScript styles to unleash the full power of CSS. React Native is becoming the de-facto standard for defining the interface for fundamental components.

<<<<<<< HEAD
![sgy 2](https://user-images.githubusercontent.com/16523191/39089800-e9987550-4583-11e8-902c-1e44dc70c4d0.gif)


=======
>>>>>>> 4de5b4e8ea1686aea84105a54503d10e0444a68a
To install and view default components:

1. Type "npm run install"
2. Type "npm run styleguidist"
3. Go to "http://localhost:6060/" in your favorite browser.
4. Profit!

## Project Direction

* Use CSS Modules and module aliasing to allow components to be platform-agnostic. React Native styles and CSS Modules both use the same style property syntax, and because you can omit the filename extension when importing modules, it's easy to be portable.

* Separate item styling from container styling, using Dividers, Spacers, etc. Adding margins and border to items directly forces you to use CSS to to style everything. Composing views with containers allows you to add styles external to the item, increasing the potential for component re-use.

## Benefits of React Native

* Cross-platform interface, abstracting over low level HTML elements
* Styles can be passed in as an array, simplifying conditionals and style combinations
* Styling via modules reduces conflicts caused by component injection

## Dependencies

### Babel

| Dependency | Description |
| ------------- | ------------- |
| babel-core | Babel compiler core. |
| babel-loader | Allows transpiling JavaScript files using Babel and webpack. |
| babel-preset-env | A Babel preset that compiles ES2015+ down to ES5 by automatically. |
| babel-preset-react | Babel preset for all React plugins. |
| babel-plugin-transform-class-properties | Allows arrow function that capture this to be defined in classes. |

### ESLint

| Dependency | Description |
| ------------- | ------------- |
| eslint | Identifies reportis on patterns found in ECMAScript/JavaScript code. |
| eslint-loader | Webpack loader that runs eslint during compilation. |
| eslint-plugin-react | React specific linting rules for ESLint. |
| babel-eslint | Allows you to lint ALL valid Babel code with the fantastic ESLint. |

### CSS

| Dependency | Description |
| ------------- | ------------- |
| css-loader | Allows you to use CSS Modules, the same convention used in React Native. |
| style-loader | Injects styles. Use ExtractText plugin for production builds. |

### Webpack

| Dependency | Description |
| ------------- | ------------- |
| webpack | |
| webpack-dev-server | |
