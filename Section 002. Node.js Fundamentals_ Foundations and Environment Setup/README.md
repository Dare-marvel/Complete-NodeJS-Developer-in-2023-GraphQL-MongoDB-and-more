## Release Cycle

- The Node.js team maintains two main versions of the Node.js runtime: the latest current version and the latest long-term support (LTS) version.
- The latest current version includes the latest features, bug fixes, and performance improvements, but may introduce new bugs and changes that can break existing code.
- The LTS version provides stability and allows developers to create stable versions of their code for production use.
- LTS versions are separated into an active phase and a maintenance phase, with different levels of changes accepted during each phase.
- Even-numbered versions of Node.js become LTS versions, while odd-numbered versions remain current versions.
- Choosing between the latest current version and the LTS version depends on factors such as the timeline for deploying an application to production.

[Resources](https://github.com/nodejs/release#release-schedule)

## REPL
- Running Node.js without passing any arguments launches the REPL (Read-Eval-Print-Loop) mode.
- In REPL mode, you can type in JavaScript code and the REPL will read, evaluate, print the result, and loop back to the start.
- The read step includes parsing the code to understand its structure and meaning.
- The evaluated code is run by the V8 engine and the result is printed to the console.
- Code entered in REPL mode is retained until the program is exited, allowing for building up larger programs.
- However, REPL mode is not suitable for writing large applications as it does not provide a way to save or edit code.
- For writing larger Node.js applications, code is typically written in JavaScript files using a code editor.

## First App
- In Node.js, the `process` object provides information about and control over the current Node.js process.
- The `process.argv` property is an array containing the command line arguments passed when the Node.js process was launched.
- The first element of `process.argv` is the path to the Node.js executable, and the second element is the path to the JavaScript file being executed.
- Any additional command line arguments are included in the remaining elements of `process.argv`.
- This allows a Node.js script to access and use command line arguments passed to it.
- The `process.argv` property can be used to access command line arguments passed to a Node.js script.
- These arguments can be used to control the behavior of the script.
- Unused arguments are ignored.
- The Node.js runtime provides additional features beyond plain JavaScript, as documented in the Node.js documentation.

## Node.js Vs Javascript
- JavaScript is a programming language that is executed by a JavaScript engine, such as Chrome's V8 engine or Firefox's SpiderMonkey engine.
- The JavaScript engine converts the JavaScript instructions into instructions that the computer hardware can understand and execute.
- Node.js is a way to run JavaScript outside of a web browser, using the V8 engine.
- Node.js provides additional features beyond the V8 engine, allowing for the execution of JavaScript in a variety of environments.
- When running JavaScript in Node.js, browser-specific features such as the `window` object are not available.
- Instead, Node.js provides its own global object with additional features, such as the `process` object and its `argv` property.

**Resources**:<br>
[Johnny five](https://johnny-five.io/)<br>
[Deno runtime](https://deno.land/)

## The Global Object
- In the browser, the `window` object provides access to features such as browsing history, location, and the `navigator` object.
- In Node.js, the `global` object provides access to features such as command line arguments, loaded modules, and the current script's file name and directory.
- The `require` function is a built-in global in Node.js that allows for importing functions and modules.
- Node.js provides additional features not available in the browser, such as reading and writing files and creating servers.
- The Node.js documentation provides a complete list of global objects and functions available in Node.js.
- Some Node.js globals, such as the `URL` class, follow browser conventions and standards to make it easier to transition between front-end and back-end code.

## Backend Vs Frontend
- Node.js is often used to create servers for web and mobile applications, providing features such as security, input validation, and business logic.
- In web and mobile development, there is a distinction between the front-end (client) and the back-end (server).
- The front-end is what the user sees and interacts with, while the back-end handles tasks such as data processing and security.
- When a user accesses a website, their browser sends a request to the server for data, which is returned in a response.
- The data can include static files such as HTML, JavaScript, and CSS.
- The communication between the client and server uses the HTTP (Hypertext Transfer Protocol) or HTTPS (secure version) to transfer data.
- For dynamic websites, the server can send data in formats such as JSON or XML, rather than static files.
- The back-end serves data to the front-end to display to the user.
- Back-end code can be written in any language and runtime, including Node.js, Python, Ruby, Java, and Go.
- The back-end handles tasks such as security, user authentication, and input validation that cannot or should not be done on the front-end.
- The front-end is typically written in HTML, CSS, and JavaScript.
- Node.js allows developers to write both the front-end and back-end in the same language (JavaScript) and provides additional benefits.
