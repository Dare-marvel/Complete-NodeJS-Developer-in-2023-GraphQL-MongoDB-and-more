## What is a Web Server?
- Node is used to build backends for websites and mobile applications.
- A backend can include a web server or an FTP server.
- When you visit a website, your browser uses the Domain Name System (DNS) to find the server's IP address.
- The DNS server sends the IP address back to your computer.
- Your computer then communicates with the server using the HTTP protocol.
- The server sends back data such as JSON files, text, images, or videos.
- As developers, we don't have to worry about DNS because the browser and computer manage it for us.
- The first time we visit a site, the browser requests the IP address from the DNS server. Afterwards, it stores the location in the DNS cache to improve performance.

## Introduction to HTTP Responses and Requests
- When you visit a website, your browser uses DNS to find the server's IP address.
- Your browser then communicates with the server using the HTTP protocol.
- The server's API defines how it responds to requests.
- The API can be implemented in any programming language, such as Node or Python.
- The browser and server communicate using the HTTP protocol.
- HTTP has several request methods, also known as HTTP verbs, that represent actions you can perform on the server.
- These methods include GET, POST, and DELETE.
- HTTP has become the language of the web.

## HTTP Requests
- An API (Application Programming Interface) specifies how two applications communicate with each other.
- On the web, the browser makes requests to the server, which responds to those requests.
- The API is made up of operations using HTTP methods such as GET and POST.
- These methods can be used on collections of data, such as a list of friends or messages.
- You can also use an ID to specify a specific item in a collection.
- Requests can be categorized into those made on collections and those made on specific items.
- You can use the POST method to add data to a collection, such as sending a message to friends.
- You can use the PUT method to update a specific item, such as changing the text of a message.
- You can use the DELETE method to remove an item, such as deleting a message or removing a friend.
- Each HTTP request has four main parts: the method, the path to a collection or item, headers, and the body.
- The path in an HTTP request specifies the resource being accessed on the server.
- You can send data to the server by adding a body to the request.
- The most common format for sending data over HTTP is JSON.
- A body is usually included in POST and PUT requests, but not in GET or DELETE requests.
- Headers are optional properties that can be included in a request to send additional metadata to the server.
- Headers can include information such as the size of the data being sent or authentication information.
- Every request must include a host header, which specifies the server and port number the request is being sent to.

## HTTP Responses
- HTTP responses have three main parts: headers, a body, and a status code.
- Headers can include information such as the content type of the data being sent.
- The body contains the data being fetched from the server.
- The status code indicates whether the request was successful or not.
- A status code of 200 indicates a successful response.
- HTTP status codes can be grouped into five categories: 100s, 200s, 300s, 400s, and 500s.
- The 100 series includes informational responses that are used internally by libraries and browsers.
- The 200 series includes successful responses, such as 200 OK and 201 Created.
- The 300 series includes redirection messages, such as 301 Moved Permanently.
- The 400 series includes client error responses, such as 400 Bad Request, 401 Unauthorized, and 403 Forbidden.
- A 401 Unauthorized error means that the user is not authenticated or logged in.
- A 403 Forbidden error means that the user is authenticated but does not have permission to access the requested data.
- A 404 Not Found error means that the requested resource does not exist or is not recognized by the server.
- A 405 Method Not Allowed error means that the requested method is not supported by the server.
- A 408 Request Timeout error means that the request took too long and is no longer valid.
- The 418 I'm a Teapot status code was added as an April Fool's joke.
- The 500 series includes server-side error responses, such as 500 Internal Server Error and 503 Service Unavailable.

## Our First Webserver
- The HTTP module in Node allows you to create a server and handle incoming requests.
- You can create a server by calling the `http.createServer()` function.
- This function expects a callback function, called the request listener, that specifies what to do when a request is received.
- The callback function takes two parameters: the incoming request and the server response.
- The request object allows you to access the headers and data passed in from the client.
- The response object allows you to create a response by writing data and headers to send back to the client.
- Both the request and response objects are streams.
- You can use the `response.writeHead()` function to write headers to the response, such as the status code and content type.
- You can use the `response.end()` function to signal that the response is complete and ready to be sent back.
- You can start the server listening for requests by calling the `server.listen()` function.
- The server will listen on the local machine, which can be accessed using the `localhost` address.
- You need to specify a port number for the server to listen on.
- The `listen()` function also allows you to pass in a callback function that is called when the server starts listening.
- You can change the content type of the response by setting the `Content-Type` header to `application/json`.
- This allows you to send a JavaScript object as JSON data in the response.
- You need to use the `JSON.stringify()` function to convert the object into a string before sending it in the response.

## HTTP APIs and Routing
- A Node HTTP server is an event emitter that emits a `request` event when a request is received.
- The server responds to all requests using the same request listener callback function.
- Different URLs, or endpoints, can represent different types of requests and functionality.
- You can handle different endpoints by checking the `request.url` property and responding accordingly.
- You can send different types of content, such as JSON or HTML, in the response.
- You can use the `response.write()` function to write data to the response stream in multiple calls.
- You can set the status code and headers of the response using the `response.statusCode` and `response.setHeader()` properties.
- If you try to access a non-existing endpoint, you should receive a 404 Not Found error.

## Parameterized URLs
- When your data is stored in a collection, such as an array of friends, you can query for individual items by passing in an ID parameter.
- You can pass the ID as a parameter in the endpoint URL, such as `/friends/1`.
- This is called a parameterized endpoint or route.
- In your Node code, you can parse the request URL to extract the ID parameter.
- One way to do this is by splitting the URL string on the forward slash character.
- You can then check the second item in the resulting array to determine which endpoint is being accessed.
- If the length of the array is 3, it means that an ID parameter has been passed in.
- You can use this ID to query for and return the specific item from the collection.
- You can use conditional logic to handle requests for specific items or for the entire collection.
- If the length of the URL array is 3, it means that an ID parameter has been passed in.
- You can use this ID to query for and return the specific item from the collection.
- If the ID is not valid, such as if it is out of range, the server should return a 404 Not Found error.
- Hardcoding the length of URLs or the number of parameters is not recommended for production code.
- As a developer, it's a good idea to search for existing solutions to common problems rather than reinventing the wheel.
- However, when learning and exploring, it can be helpful to look behind the scenes and understand how things work.

## Same Origin Policy
- The same-origin policy is a security feature implemented by web browsers.
- An origin is defined by the combination of three things: the protocol, the host, and the port.
- If any of these three things change, the origin changes.
- The same-origin policy restricts what your browser is allowed to load when browsing pages on the internet.
- Your browser allows all requests from the same origin as the page you've loaded, but restricts requests from different origins.
- This helps protect your privacy by preventing, for example, a script on Google.com from accessing data on Facebook.com.
- There are some exceptions to the same-origin policy, such as POST requests, where cross-origin requests are allowed.
- The same-origin policy is a security feature implemented by web browsers.
- An origin is defined by the combination of three things: the protocol, the host, and the port.
- If any of these three things change, the origin changes.
- The same-origin policy restricts what your browser is allowed to load when browsing pages on the internet.
- Your browser allows all requests from the same origin as the page you've loaded, but restricts requests from different origins.
- This helps protect your privacy by preventing, for example, a script on Google.com from accessing data on Facebook.com.
- There are some exceptions to the same-origin policy, such as POST requests, where cross-origin requests are allowed.
- The same-origin policy allows some cross-origin requests, such as POST requests, because they don't risk leaking data.
- The server receiving the request can choose how to respond, and can ignore the request if it looks suspicious.
- You can easily navigate to a different origin by clicking on a link in a web page.
- However, if you try to fetch data from a different origin using JavaScript, the same-origin policy may restrict the request.
- If the request is blocked, you may see an error message indicating that the `Access-Control-Allow-Origin` header is not present.
- This is related to CORS (Cross-Origin Resource Sharing), which is a mechanism for allowing cross-origin requests.
- The main idea behind the same-origin policy is to keep users secure while allowing them to browse the internet and visit websites.

## Cross Origin Resource Sharing (CORS)
- CORS (Cross-Origin Resource Sharing) is a mechanism for relaxing the restrictions of the same-origin policy.
- It allows applications to make requests to multiple domains and origins.
- Websites can use the `Access-Control-Allow-Origin` header to specify which origins are allowed to access their resources.
- This header is set on the server and included in the response.
- If the header is not included, the default rules of the same-origin policy apply.
- The header can have several values: it can be omitted, it can specify a specific origin, or it can allow all origins using an asterisk (`*`).
- In production, it's a good idea to explicitly set the allowed origins to avoid potentially malicious requests.
- CORS follows the practice of whitelisting, where access is explicitly allowed to a specific list of origins.
- This is the opposite of blacklisting, where access is allowed by default and only specific origins are blocked.
- Whitelisting is generally considered more secure than blacklisting because it is easier to miss something when blacklisting.
- The `Access-Control-Allow-Origin` header acts as a whitelist, allowing only the specified origins to access the server's resources.
- The Wikimedia Foundation chose to allow all origins to access their data because they decided that access was more important than security.
- The enforcement of the same-origin policy and CORS is done by the browser.
- If a browser chose to ignore these policies, it would still be able to browse the web, but it would not be secure.
- It's important to use browsers and other software that you trust.

## POSTing Data to the Server
- To submit data to a server, you can use either the POST or PUT request method.
- The POST method is used to add new data, while the PUT method is used to update existing data.
- Some servers avoid using the PUT method and instead use a combination of DELETE and POST requests.
- On the server side, you can differentiate between GET and POST requests by checking the `request.method` property.
- You can handle different types of requests by combining the request method with the URL of the request.
- The request object is a readable stream, so you can listen for data events using the `request.on()` function.
- The data passed to the callback is a Node buffer object, which contains the raw bytes sent from the client.
- You can convert this buffer to a string using the `toString()` function, and then parse it as JSON to get a JavaScript object.
- You can test your server by making a POST request using the `fetch()` function in the browser's JavaScript console.
- The `fetch()` function takes two arguments: the URL to make the request to, and an options object.
- In the options object, you can specify the request method as `POST` and include a body containing the data to send to the server.
- The body must be a string, so you need to use `JSON.stringify()` to convert a JavaScript object into a JSON string.
- When you make the request, you should see the data being logged on the server and added to the friends array.
- If you restart the server, any changes made to the friends array will be lost because the data is not being persisted to a database.
- The browser may warn you if it receives JSON data that is not being handled by your code.


