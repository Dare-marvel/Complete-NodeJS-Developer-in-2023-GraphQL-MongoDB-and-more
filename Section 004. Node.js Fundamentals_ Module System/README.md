## The require Function
- Node.js allows us to reuse code using modules, which helps us focus on the unique features of our application.
- Node.js has built-in modules, such as the `http` and `events` modules, that we can use to perform common tasks without having to write the code ourselves.
- Node.js adds a built-in function called `require` that is not part of vanilla JavaScript.
- The `require` function takes a JavaScript file, executes it, and returns the code from that file so that we can reuse it elsewhere.
- We can use the `require` function to load built-in modules, our own custom modules, or third-party modules built and shared by other developers.
- To use a built-in module, we pass the name of the module as a string to the `require` function and assign the result to a variable (usually a constant).

Resources:
* [Free Code Camp](https://www.freecodecamp.org/news/how-to-use-the-javascript-require-function/#:~:text=The%20require()%20function%20is,JavaScript%20code%20as%20CommonJS%20modules.)
* [Require Vs Import](https://flexiple.com/javascript/javascript-require-vs-import/)

## Making HTTP Requests
- The code uses the built-in `http` module in Node.js to make a request to the Google homepage.
- The `http` module is loaded using the `require` function and assigned to a constant called `http`.
- The `http` constant is used to call the `request` function, which takes a URL or request options object as its first argument and a callback function as its second argument.
- The callback function is passed a `response` object when it is called, which represents the result of making the request.
- The `response` object has an `on` function that takes the name of an event as a string and a listener as a callback.
- The code listens for the `data` event, which is emitted when a chunk of data is received from the server. The data is logged to the console using a template string.
- The code also listens for the `end` event, which is emitted when there is no more data coming in from the request. A message is logged to the console when this event is emitted.
- The result of calling the `request` function is assigned to a constant called `request`.
- The `end` function must be called on the `request` object to cause the request to be sent.
- The code uses the built-in `http` module in Node.js to make a request to the Google homepage.
- The code is updated to use the `https` protocol by changing the URL and using the `https` module instead of the `http` module.
- The `https` module has similar functions to the `http` module, with additional functionality for secure communication.
- The code uses destructuring syntax to extract the `request` function from the object returned by the `require` function.
- The code is updated to use the `get` function instead of the `request` function. The `get` function is a convenience function that does the same thing as the `request` function when only getting data from the server.
- The `end` function no longer needs to be called when using the `get` function, as it is called automatically.

Resources:
* [GFG](https://www.geeksforgeeks.org/how-to-make-http-requests-in-node-js/)
* [LogRocket](https://blog.logrocket.com/5-ways-to-make-http-requests-in-node-js/)

## Why Use Modules?
- Modules are like boxes that contain code dedicated to doing one thing well.
- Modules can be combined with each other to create more complex structures that make up our program.
- There are three main reasons why we might want to use modules:
  1. To reuse existing code and avoid reinventing things that have already been proven to work.
  2. To organize our code into self-contained, reusable chunks.
  3. To expose only the functionality that will be used by other modules and hide implementation details that only matter within the module.
- An example is given using an `http` module that deals with requests and responses. The `http` module can be broken down into a `request` module and a `response` module, each of which is self-contained and does only what is relevant for that part of the process.
- The `http` module can use the `request` and `response` modules without needing to know the details of how they work. This simplifies the top-level code and allows us to focus on higher-level operations.

Resources:
* [Free Code Camp](https://www.freecodecamp.org/news/what-are-node-modules/#:~:text=Every%20Node.,and%20write%20more%20structured%20code.)
* [W3 schools](https://www.w3schools.com/nodejs/nodejs_modules.asp)

## Creating Our Own Modules
- A new file called `HTTPS.js` is created for the top-level module.
- A function is made to make a request against a server to send data.
- The function takes a URL and data as input and returns the response.
- The details of the request and response are broken out into separate files, `response.js` and `request.js`.
- The request function sends data to a URL after encrypting it.
- The response function reads in the response, decrypts it, and returns the data.
- Functions and variables in a module are private unless exported using the `module.exports` object.
- The `require` function is used to import functions from other modules by passing in the path of the module.
- The `require` function is used to import local modules by passing in a relative path.
- The `./` prefix represents the current folder, while `../` represents the parent folder.
- The `.js` extension can be omitted as the `require` function looks for JavaScript files by default.
- The `module.exports` object is used to export functions from a module.
- Only the public interface of a module needs to be exported, while internal details can remain private.
- The exported functions are called using the constant set to the required module.

Resources:
* [GFG](https://www.geeksforgeeks.org/how-to-create-modules-in-node-js/)

##  Exporting From Modules
- The `module.exports` object can be set all at once or properties can be assigned directly.
- The `exports` keyword is a shorthand for `module.exports`.
- If only one function is being exported, `module.exports` can be set directly to the function.
- When importing modules, the destructuring syntax can be used to only import specific functions.
- This makes the code cleaner and more readable.


Resources:
* [Free Code Camp](https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/)
* [Site Point](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)

## CommonJS vs ECMAScript Modules
- CommonJS is a standard for modules created in 2009 and mostly used in Node.js and other server-side technologies.
- The `require` function is used in CommonJS modules.
- ECMAScript (ES) introduced its own modules in ES6, also known as ES6 modules or ESM.
- ES6 modules use the `import` and `export` keywords instead of `require` and `module.exports`.
- Node.js began supporting ES6 modules from version 13.2, but the majority of Node.js code still uses CommonJS.
- It is important to focus on CommonJS, but ES6 modules may become more common over time.


Resources:
[LogRocket](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/)
[Medium](https://medium.com/globant/exploring-node-js-modules-commonjs-vs-es6-modules-2766e838bea9)

## Creating Our Own ECMAScript Modules
- To use ES6 modules, the `require` function calls must be replaced with `import` statements and the `module.exports` object with an `export` statement.
- The syntax for `import` is similar to `require`, but the file extension must always be included for relative paths.
- Node.js treats JavaScript files as CommonJS modules by default, so to use ES6 modules, the file must be named with the `.mjs` extension or the `type` field in `package.json` must be set to `"module"`.
- Using the full name of the file, including the extension, when importing modules makes the code more compatible with browsers and other JavaScript runtimes.

Resources:
[Free Code Camp](https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/)
[LogRocket](https://blog.logrocket.com/how-to-use-ecmascript-modules-with-node-js/)

## Module Caching
- Node.js maintains a cache of required modules to prevent them from being loaded multiple times.
- If a module is required more than once, Node.js will look it up in the cache instead of loading it again.
- This makes the code more efficient and prevents behavior from being run multiple times.
- The cache is global and can be accessed using the `require.cache` object.
- The `require.cache` object shows the internals of how Node.js implements CommonJS module functionality.
- It is not possible to edit a required module by reassigning its exported functions.
- Reassigning an exported function only changes it within the current module, not in the `require.cache`.
- Understanding the Node.js module system is important when building Node.js applications.

Resources:
[LogRocket](https://blog.logrocket.com/caching-node-js-optimize-app-performance/#:~:text=Caching%20is%20basically%20a%20layer,optimized%20for%20that%20particular%20purpose.)
[Medium](https://medium.com/@mackplevine/node-js-module-caching-10c4e395423e)

## Using index.js
- A folder can be treated like a module by creating an `index.js` file inside it.
- The `index.js` file exports an object containing the data to be exported from the folder.
- When the path to the folder is passed to the `require` function, it resolves to the `index.js` file inside the folder.
- This allows functions from multiple modules within a folder to be exported from a single point.
- The spread operator can be used to unpack properties from multiple modules into a single object.

Resources:
[Knowledge Hut](https://www.knowledgehut.com/blog/web-development/create-index-node-js)

## Should We Use index.js?
- The use of `index.js` is a controversial subject among Node.js developers.
- Some developers love it for its ability to simplify imports, while others prefer to always use the direct path to a module.
- The creator of Node.js, Ryan Dahl, has expressed regret about the complexity added by `index.js` to the module loading system.
- While it is not necessarily harmful to use `index.js`, it is important to be aware of its potential for added confusion.



