## Why Express?
- Building servers is a common task in Node.js, but it can be tedious to write all the code from scratch every time.
- Developers often create tools or packages to handle repetitive tasks, such as building a server.
- Express is the most widely adopted and dominant package for building servers in Node.js.
- According to the Stack Overflow developer survey, Express is the most popular backend framework for JavaScript and one of the most popular frameworks in any programming language.
- Express is easy to use, has plenty of information and tools available, and is used widely in production by top companies such as Twitter and Uber.
- It is also the basis for many other Node.js backend frameworks.

In summary, Express is a popular and convenient tool for building servers in Node.js, making it a good choice for developers who want to save time and effort. It is widely used and well-supported, with a large community of users.

## Introduction to Express
- To use the Express package, you need to initialize your project using npm and install Express from the npm registry.
- You can create an Express server in an index.js file by importing the Express package and setting up your application using the `express` function.
- You can specify the port for your server to listen on and start the server using the `listen` function, just like with Node's built-in HTTP server.
- You can start your application using the `npm start` command, which will run the `start` script specified in your package.json file or run a file named `server.js`.
- Express automatically responds with a 404 Not Found page if no route is specified for a request.
- Express is good at routing and allows you to specify routes and their handlers using methods such as `app.get` or `app.post`.
- The route handler function takes a request and response object as arguments. The response object has a convenient `send` function that allows you to send data in the response.
- You can create multiple routes with different HTTP methods and endpoints using Express.
- The route handler function takes a request and response object as arguments. You can use the `send` function of the response object to send data in the response.
- Express automatically sets the status code and content type of the response based on the data you send. For example, if you send a string, the content type is set to `text/html`, and if you send a JavaScript object, the content type is set to `application/json`.
- When a request is received, Express looks through all the registered route handlers to find a match. If none is found, it responds with a 404 Not Found page.
- Express does a lot of work for you out of the box, making it easier and more efficient to create and manage routes.

In summary, Express makes it easy to create and manage routes, handle different types of data, and respond to requests. It provides convenient methods and automatically handles common tasks such as setting status codes and content types.

## Express vs Next.js vs Koa
- When building APIs with Node.js, it's important to choose the best framework for the job.
- Express is the most widely adopted and popular framework for building Node.js backends. It was created in 2010 and focuses on doing a few things really well, such as routing, performance, and reliability.
- Express is minimal and can be extended with additional features using middleware. It has a great website with documentation and API references.
- The Express project is managed by StrongLoop, which also created LoopBack, another framework that builds on Express to make it more suitable for enterprise applications.
- LoopBack takes a "convention over configuration" approach, setting up more out of the box without requiring configuration. This can make development faster, but can also make extending the framework or debugging code more challenging.
- Koa is another framework for building Node.js backends, created by the original creator of Express, TJ Holowaychuk.
- Koa aims to leverage modern JavaScript features such as native promises and async/await, and to be more modular and promise-based than Express.
- Koa's design minimizes built-in features and relies on a powerful middleware system that can be extended with any functionality using async/await syntax.
- Next.js is a framework focused on simplifying React integration with the server side. It is used by top companies such as Netflix and GitHub.
- Next.js makes it easy to use server-side rendering and other advanced features when building React web applications. Server-side rendering can improve performance and search engine optimization by rendering content on the server instead of the client.
- Next.js also supports TypeScript, integrates analytics, and provides various other optimizations. It is more opinionated than Express, with more built-in features and decisions made for you.
- However, Next.js is not as versatile as Express when it comes to building APIs and backends, as it is focused on React integration.

In summary, Koa and Next.js are two other popular frameworks for building Node.js backends. Koa focuses on leveraging modern JavaScript features and providing a powerful middleware system, while Next.js focuses on simplifying React integration with the server side. Both frameworks have their own strengths and trade-offs compared to Express.

## Route Parameters
- With Express, you can create a list of friends and query it by ID using route parameters.
- You can create a route that returns the entire list of friends by passing an array of JavaScript objects to the `res.json` function. Express will automatically set the content type to `application/json`.
- To get an individual friend, you can create another route that uses a route parameter to specify the friend ID. The syntax for this is `:friendId`, where `friendId` is the name of the parameter.
- In the route handler function, you can access the value of the route parameter using `req.params.friendId`. Express automatically populates the `params` object with the values of any route parameters.
- It's a good idea to validate user input, such as the friend ID, to avoid unexpected bugs and ensure that you know what you're working with.
- It's important to validate user input, such as the friend ID, to avoid unexpected bugs and ensure that you know what you're working with.
- You can use an if statement to check whether the friend with the specified ID was found in the friends array. If the friend is not found, the value of `friend` will be `undefined`.
- The friend ID from the route parameter is a string, so you need to convert it to a number before using it to index the friends array. You can do this using the `Number` function or by using a plus sign.
- If the friend is not found, you can return a 404 Not Found response manually by calling `res.status(404).json({ error: 'Friend does not exist' })`. This sets the status code to 404 and sends a JSON object with an error message in the response.
- You can also set the status code for successful responses using `res.status(200).json(friend)`, although Express defaults to sending a 200 response if no status code is specified.

In summary, when handling user input such as route parameters, it's important to validate the input and handle any errors that may occur. With Express, you can easily return custom error responses with appropriate status codes and messages. This makes your code cleaner and more resilient to errors.

## Postman and Insomnia
- Postman is a collaborative API testing tool that allows you to create, organize, and share HTTP requests with your teammates.
- Postman provides useful features such as integration with REST, SOAP, and GraphQL, automated testing, design and mock functionality, documentation, monitoring, and workspaces for collaboration.
- Insomnia is another tool for designing and debugging APIs, with a simple and easy-to-use user interface. Both Postman and Insomnia are excellent tools for working with APIs.
- In Postman, you can create a collection of requests and specify the URL, HTTP method, body, and headers for each request. You can then send the request to your API and view the response.
- Postman parses the response and shows you the results, including the status code, response time, size, and headers. You can also explore the data in the response.

In summary, Postman is a powerful tool for testing and debugging APIs. It allows you to create and organize HTTP requests, send them to your API, and view the responses. It provides many useful features for collaboration, testing, documentation, and monitoring. Insomnia is another tool that provides similar functionality with a focus on simplicity and ease of use.

## Development Dependencies
- You can install Nodemon as a development dependency using the `npm install nodemon --save-dev` command. This adds Nodemon to the `devDependencies` section of your package.json file.
- Development dependencies are packages that are only needed during development and are not required to run your project in production. Examples include tools that improve the development experience, such as Nodemon.
- Keeping your dependencies well-organized and separating development dependencies from regular dependencies can help minimize the size of your node_modules folder and make your package play nice with others.
- You can add a script to your package.json file to run Nodemon, such as `"watch": "nodemon server.js"`. This script will automatically restart your server whenever one of your JavaScript files changes.
- You can run the watch script using the `npm run watch` command. This will start your server and automatically restart it whenever you make changes to your code.

In summary, Nodemon is a useful tool for automatically restarting your server during development. You can install it as a development dependency and add a script to your package.json file to run it. This makes it easy to see the effects of your changes in real-time without having to manually stop and restart your server.

## Middleware
- Middleware is an important concept in Express that allows you to add features to your server by working with incoming requests and outgoing responses.
- Middleware functions run between the incoming request and the outgoing response, processing the request and modifying the response before it is sent.
- An Express application is essentially a series of middleware functions that execute in order. When a request comes in, it flows through all the middleware sequentially until a response is sent.
- Middleware functions are registered with Express using the `app.use` function. They take three arguments: the request object, the response object, and a `next` function.
- The `next` function is used to control the flow of middleware. When called, it passes control to the next middleware in the chain. This allows you to perform actions such as logging or validation before passing the request on to the next middleware or route handler.
- Middleware functions in Express can be thought of as flowing downstream, with one middleware passing control to the next using the `next` function.
- The last middleware in the chain is usually an endpoint, specified using one of the HTTP method functions such as `app.get` or `app.post`. This middleware sets the response body and returns control to the previous middleware.
- The `next` function controls the order of execution of middleware. When called, it passes control to the next middleware downstream. When all middleware have finished executing, control flows back upstream and the response is sent to the client.
- Middleware can perform actions such as logging, validation, or authentication before passing control to the next middleware or endpoint. This allows you to add functionality to your server in a modular and flexible way.

In summary, middleware is a powerful feature of Express that allows you to add functionality to your server by processing requests and modifying responses. Middleware functions are registered with Express using `app.use` and execute in order when a request is received. The `next` function is used to control the flow of middleware and pass control to the next middleware in the chain.

## Writing Our Own Logging Middleware
- You can register middleware with Express using the `app.use` function. This takes a callback function with three arguments: the request object, the response object, and the `next` function.
- Inside the middleware function, you can perform actions such as logging information about the request. You can access properties of the request object such as the method and URL to log details about the incoming request.
- It's important to call the `next` function at the end of your middleware to ensure that Express passes the request to the correct route handler. If you don't call `next`, Express will hang and not send a response.
- You can use middleware to log the amount of time it takes to complete a request. To do this, you can create a constant called `start` and set it to the current time when the middleware is first called. You can then calculate the difference between `start` and the current time when the response is sent to log the duration of the request.
- You can use middleware to measure the amount of time it takes to process a request. To do this, you can create a `start` variable and set it to the current time when the middleware is first called.
- When the `next` function is called, control passes to the next middleware or route handler. This middleware or handler processes the request and sets the response status code and body.
- After the `next` function returns, control returns to your middleware. You can then calculate the difference between the current time and the `start` time to determine how long it took to process the request.
- You can log this information along with other details about the request, such as the method and URL. This allows you to see how long each request takes to process and identify any performance issues.
- The time measured by your middleware may be different from the time measured by a tool such as Postman, because they are measuring different things. Your middleware measures the time it takes for Express to process the request, while Postman measures the total time it takes for the request to be sent and the response to be received.

In summary, you can use middleware in Express to measure the amount of time it takes to process a request. You can create a start variable when the middleware is first called, and calculate the difference between start and the current time after calling next. This allows you to log information about each request and its processing time.

## POST Requests in Express
- You can create a route to handle POST requests to add a new friend to your friends list. This route takes the request and response objects as arguments.
- With POST requests, you need to read data from the request body. However, Express does not understand JSON data out of the box. To parse JSON data, you can use the built-in `express.json` middleware function.
- The `express.json` middleware function checks the content type of incoming requests and parses the request body as JSON if the content type is `application/json`. It sets the parsed data on the `req.body` object.
- In your route handler, you can create a new friend object based on the data in `req.body`. You can set properties such as the name and ID of the new friend.
- You can add the new friend to your friends list by pushing it onto the array. You can then return the new friend as a JSON object in the response.
- It's a good idea to validate user input, such as the name of the new friend, to avoid unexpected bugs and ensure that you know what you're working with.
- It's important to validate user input, such as the name of the new friend, to ensure that it meets your requirements. You can use an if statement to check whether the `req.body.name` property exists and is valid.
- If the user input is invalid, you can return an error response with an appropriate status code. For example, you can use a 400 Bad Request status code to indicate that the request data is invalid.
- You can set the status code and send a JSON object with an error message using `res.status(400).json({ error: 'Missing friend name' })`. This sets the status code to 400 and sends a JSON object with an error message in the response.
- To test your route, you can use a tool such as Postman to create a POST request to your friends collection. You can set the body of the request to a raw JSON object with the data for your new friend.
- Make sure to double-quote all property names and values in your JSON object, as this is required by the JSON format. You can then send the request and view the response to see if your route is working as expected.
- When handling a POST request to add a new friend, you can use an if statement to check whether the `req.body.name` property exists and is valid. If it is not, you can return an error response with a 400 Bad Request status code and an error message.
- If you don't return from your route handler function after sending the error response, your code will continue to execute and may try to send another response. This can cause an error because you can't send multiple responses to a single request.
- To avoid this error, you should return from your route handler function after sending the error response. This prevents any further code from executing and ensures that only one response is sent.
- You can test your updated code by sending a POST request with an empty body using a tool such as Postman. You should see a 400 Bad Request response with your error message, and no errors should be logged on the server.

In summary, it's important to validate user input when handling POST requests in Express. If the input is invalid, you should return an error response with an appropriate status code and message. Make sure to return from your route handler function after sending the error response to prevent any further code from executing. You can test your updated code using a tool such as Postman to ensure that it is working as expected.

## Model View Controller (MVC)
- The Model-View-Controller (MVC) design pattern is a common way to organize code in Express applications. It helps make your code more manageable, easier to understand, and easier to scale.
- MVC splits your code into three components: the model, the view, and the controller. The user interacts with these components to use your application.
- The controller is responsible for processing user requests and manipulating the model accordingly. For example, it might add or remove data from a database based on the user's actions.
- The model represents your data and includes any functions used to access it. It translates the data as it is stored in the database into a format that can be used by your application.
- The view presents the data from the model to the user. This might be in the form of graphs, diagrams, or HTML pages populated with data from the model. In an API, the view might just be the JSON data sent in response to a request.
- The two most important factors when judging the quality of code are correctness and understandability. Code should do what it says it does, and it should be easy to read and understand.
- Using design patterns such as Model-View-Controller (MVC) can help make your code more understandable by organizing it into clear, well-defined components. This makes it easier to read, update, and improve your code.
- MVC splits your application into three layers: the model, the view, and the controller. Each layer is responsible for a specific aspect of your application, such as representing data, presenting data to the user, or processing user requests.
- There are other related design patterns, such as Model-View-Presenter (MVP) and Model-View-ViewModel (MVVM), that grew out of MVC. These patterns capture subtle differences in how applications are structured, but if you understand MVC, you'll feel right at home working with them.
- In Node with Express, MVC is a common and effective way to organize your code. It helps make your code more understandable and easier to work with.

In summary, using design patterns such as MVC can help make your code more understandable by organizing it into clear, well-defined components. This makes it easier to read, update, and improve your code. MVC is a common and effective way to organize code in Node with Express applications.

## Model View Controller in Express
- To apply the Model-View-Controller (MVC) design pattern to your Express application, you can start by organizing your route handlers into controllers. These functions process incoming requests and outgoing responses and are responsible for interacting with user actions.
- You can create a new folder called `controllers` to store your controller modules. Inside this folder, you can create one module for each collection of data, such as `friends.controller.js` and `messages.controller.js`.
- In each controller module, you can move your route handler functions from your main server file. You can define these functions using named function expressions, such as `function getMessages(req, res) { ... }`. This makes it easier to debug your code because Node can tell you the name of the function where an error occurred.
- To use these functions in your main server file, you need to export them from your controller module. You can do this by assigning an object with your functions to `module.exports`, such as `module.exports = { getMessages, postMessage }`.
- In your main server file, you can then import your controller functions and use them as route handlers. This allows you to organize your code into clear, well-defined components and makes it easier to understand and maintain.
- To apply the Model-View-Controller (MVC) design pattern to your Express application, you can organize your route handlers into controllers. You can create a new folder called `controllers` and define one module for each collection of data, such as `friends.controller.js` and `messages.controller.js`.
- In each controller module, you can define your route handler functions using named function expressions and export them using `module.exports`. You can then import these functions in your main server file using a relative import.
- Make sure to import the correct controller module for each route. For example, if you have a route that handles requests to the `/messages` endpoint, you should import the `messages.controller.js` module and use its exported functions as route handlers.
- You can test your updated code by running your server and making requests using a tool such as Postman. You should see that your routes are still working as expected, with the correct responses being sent for each request.
- To apply the Model-View-Controller (MVC) design pattern to your Express application, you can organize your data into models. You can create a new folder called `models` and define one module for each collection of data, such as `friends.model.js`.
- In each model module, you can define your data and any functions used to access or manipulate it. For example, you might move your `friends` array from your main server file into the `friends.model.js` module.
- You can export your data and functions from your model module using `module.exports`. For example, you might export your `friends` array directly by setting `module.exports = friends`.
- In your controller modules, you can import your model using a relative import. You can then access the data and functions exported by your model and use them in your route handler functions.
- This allows you to organize your code into clear, well-defined components and makes it easier to understand and maintain. It also makes it easier to switch to a different data source, such as a database, in the future.
- The text describes how to import a model from a file and use it instead of an array.
- The model is used to add and retrieve friends.
- The views are JSON objects that are sent back in the response.
- The code is organized using the Model-View-Controller design pattern, where each module handles a specific concern.
- This makes the code easier to read and understand.
- The text mentions that while the Model-View-Controller pattern can be implemented using classes and objects, it is more common and recommended to use modules in JavaScript.

In summary, you can apply the MVC design pattern to your Express application by organizing your data into models. You can create a new folder called `models` and define one module for each collection of data. In each module, you can define your data and any functions used to access or manipulate it, and export them using `module.exports`. You can then import these models in your controller modules and use them in your route handler functions. This allows you to organize your code into clear, well-defined components and makes it easier to understand and maintain.

## Express Routers
- A router is a mini application that contains its own set of middleware and is used to break down an express application into smaller, more modular groups.
- A router can be created using the `express.Router()` object and assigned to a constant like `friendsRouter`.
- Routes can be added to the router rather than directly to the app, and the router can be used as middleware by calling `app.use()`.
- Routers can be mounted on a specific path, allowing for routes to be defined relative to where the router was mounted.
- Organizing routes into routers allows for self-contained groups of routes that don't need to worry about other routes in the application.
- Routers can be placed in a separate folder, such as `routes`, and imported into the main server file.
- The router only needs to worry about its own paths, reducing mental overhead and making it easier to keep track of code.
- Routes can be copied from the main server file to a separate router file, such as `messagesRouter`.
- The router can be created using the `express.Router()` object and assigned to a constant like `messagesRouter`.
- Routes can be added to the router rather than directly to the app, and the router can be used as middleware by calling `app.use()`.
- The router can be mounted on a specific path, allowing for routes to be defined relative to where the router was mounted.
- Custom middleware can be added to a router by calling `router.use()`, and it must include a call to the `next` function in order to pass control to the next middleware function.
- Errors may occur if the file paths for required modules are not correct, and these errors can be fixed by adjusting the file paths.
- The server logs can be used to check if middleware functions are being called correctly.
- The `request.baseUrl` property can be used in middleware to log the full path of a route, rather than just the path relative to the router.
- The `request.baseUrl` property should be combined with the `request.url` property to log the full path of a route.
- It is easy to make mistakes and typos when moving code around and organizing routes into separate router files.
- A link to the code can be provided to help users follow along with the changes made in the video.
- Using routers and custom middleware allows for customization of how a server reacts to different collections of data.
- Routers can be used to create hierarchies of paths and organize a server as more routes are added.

## RESTful APIs
- When designing APIs, it is important to follow best practices and guidelines to ensure that the API is easy to use and understand. One of the most common and important patterns to follow when building APIs is REST (Representational State Transfer). APIs that follow the REST pattern are called RESTful APIs.

- RESTful APIs make use of existing web standards, such as URLs and the HTTP protocol, to access endpoints and transfer data. The data is often represented in a standard format, such as JavaScript Object Notation (JSON), and specified in the content type header.

- When designing a RESTful API, it is important to organize the endpoints into collections, which represent lists of data that the server makes available. These collections can be queried, added to, and deleted from using the appropriate HTTP methods (GET, POST, PUT, DELETE). The endpoints should be named using plural nouns, such as `friends` or `messages`, to represent the collections of data.

- REST (Representational State Transfer) is a pattern for designing APIs that makes use of existing web standards, such as URLs and the HTTP protocol, to access endpoints and transfer data. RESTful APIs represent collections of data stored on the server side, and use the GET, PUT, POST, and DELETE HTTP methods to communicate actions performed on that collection of data.

- In a client-server architecture, the client displays data to the user and allows them to perform actions, which are sent to the server. The server performs those actions, updates the data stored on the server side, and sends it back to the client. The two have distinct sets of responsibilities and communicate with each other to get the job done.

- Requests in RESTful APIs are both stateless and cacheable. Stateless means that each request is separate and not connected to any state on the client that is not included in the request. The server does not keep track of which requests a user has made in the past or in their current session. This allows requests to be cached by saving the results for future use without having to perform all of those actions again.

- In contrast to RESTful APIs, some APIs use remote procedure calls (RPC), where clients communicate with servers by calling functions on that server as if they were on the same machine. However, REST became popular because these approaches were not working very well, as they ignored the fact that the client and server are two separate machines communicating over potentially large distances using the internet.

## Create Read Update and Delete (CRUD)

- In the context of APIs, CRUD refers to the four basic operations that can be performed on data: Create, Read, Update, and Delete. These operations correspond to the HTTP methods POST, GET, PUT/PATCH, and DELETE, respectively.

- When working with a collection of data, such as a collection of customers, CRUD operations can be performed on either the entire collection or on a specific item within the collection. For example, to create a new customer, a POST request can be made to the customers collection. To read the list of customers, a GET request can be made to the customers collection.

- To update an existing customer, a PUT or PATCH request can be made to the specific customer ID. A PUT request replaces the existing data with the new data passed in the request body, while a PATCH request only modifies specific properties of the customer. To delete a customer, a DELETE request can be made to the specific customer ID.

- When performing CRUD operations in RESTful APIs, it is important to make good use of HTTP status codes to communicate the actions performed or any errors that occurred. For example, when creating a new customer, a 201 Created response code can be used instead of just 200 OK to be more specific about what happened on the server.

## Sending Files
- Express makes it easy to send entire files from the server to the client.
- Files can be placed in a new folder, such as a `public` folder, on the server.
- The `res.sendFile()` function can be used to send a file, and takes the path of the file as an argument.
- The built-in `path` module and its `join` function can be used to construct the absolute path of the file.
- The `__dirname` global variable can be used to get the name of the folder where the current file lives.
- Express sets the content type based on the extension of the file name when sending a file using `res.sendFile()`.

## Serving Websites With Node
One common scenario when working with Node servers is using Node to serve a front-end web application, in addition to an API. This can be done using the Express static file middleware, which serves everything under a particular path. Here are the main points to keep in mind:

- To serve a front-end web application, you can use the `express.static` middleware and pass in the relative path of the folder containing your application files.
- The static file middleware can be mounted on a specific path, just like routers.
- The path passed to the `express.static` middleware is relative to the folder from which you launch your Node application.
- To ensure that the static file middleware looks at the correct absolute path, you can use the `path.join` function and the `__dirname` global variable to construct the absolute path of the folder containing your application files.
- It is possible to serve static files from a Node server using the Express static file middleware.
- The middleware can be added by calling `app.use()` and passing in `express.static()` with the relative path of the folder containing your static files.
- Serving static files from a Node server is not very RESTful, as it involves querying the server by passing in the name of the file rather than working with collections of data.
- For larger applications, it may be better to serve static files from a content delivery network (CDN) such as Akamai or Amazon CloudFront.
- For smaller or medium-sized applications, serving static files from a Node server using the Express static file middleware can be an easy and convenient option.


## Templating Engines
Express has excellent support for templating engines, which allow you to populate your HTML with data from the server before it is sent to the client to be shown to the user. Here are the main points to keep in mind:

- Express supports a large number of templating engines, including Handlebars, which is one of the most widely used.
- A templating engine replaces variables marked with curly braces in a template with their actual values from the Node server, transforming the template into an HTML file to be rendered by the browser.
- To use a templating engine with Express, you need to install the corresponding npm package and tell Express which templating engine you are using and where it can find your templates.
- This can be done by setting the appropriate parameters in your Express application settings using the `app.set()` method.
- Express supports a large number of templating engines, including Handlebars, which is one of the most widely used.
- A templating engine replaces variables marked with curly braces in a template with their actual values from the Node server, transforming the template into an HTML file to be rendered by the browser.
- To use a templating engine with Express, you need to install the corresponding npm package and tell Express which templating engine you are using and where it can find your templates.
- This can be done by setting the appropriate parameters in your Express application settings using the `app.set()` method.
- You can create a route that serves your Handlebars templates by using the `res.render()` function, which takes the name of the template file and an object containing the values for the variables in the template as arguments.

## Layouts and Separation of Concerns
Handlebars, a popular templating engine supported by Express, has a useful feature called layouts. A layout is a file, typically named `layout.handlebars`, that contains all of the common HTML that all of your pages will use. Here are the main points to keep in mind:

- Handlebars supports layouts, which allow you to define common HTML for all of your pages in a single file.
- The layout file is typically named `layout.handlebars` and contains placeholders for variables, such as the page title and body content.
- When you call the `res.render()` function to render a template, the layout is used by default and the template only needs to include the templating for its body content.
- The `res.render()` function takes the name of the template file and an object containing the values for the variables in the template as arguments.
- Using layouts with Handlebars allows you to define common HTML for all of your pages in a single file, making it easier to maintain and update your templates.





