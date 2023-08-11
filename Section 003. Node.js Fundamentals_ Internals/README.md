## What does Node.js do?

- The Node.js runtime includes more than just the V8 engine, it also includes Node.js APIs that provide additional functionality.
- These APIs allow for tasks such as reading and writing files, making HTTP requests, and encrypting data.
- When V8 encounters code that uses these APIs, it calls the corresponding functionality in the Node.js APIs.
- Some of this functionality is implemented in lower-level languages such as C and C++, using Node.js bindings to connect the JavaScript code to the C/C++ code.
- The core functionality for tasks such as working with files and the HTTP protocol is implemented in the Libuv library, written in C.
- Libuv deals with input/output tasks and delegates them to other parts of the operating system.
- Node.js uses asynchronous I/O to delegate tasks to the operating system and continue executing without waiting for a response.
- This includes tasks such as working with the file system and making network requests.
- The Libuv library provides an abstraction layer for working with different operating systems, allowing Node.js to work on any platform.
- The functionality provided by Libuv is exposed to JavaScript through the Node.js APIs and bindings.
- This allows Node.js to process input and send it back to the user.
- The Node.js project is hosted on GitHub and its source code is open source.
- The `lib` folder contains the JavaScript code for the Node.js APIs, with each module having a corresponding file.
- The `src` folder contains the C++ code for the Node.js bindings, which connect the JavaScript code to the lower-level C++ code.
- An example of this is the `fs.open` function, which is defined in the `fs.js` file in the `lib` folder and calls the `binding.open` function to connect to the C++ code in the `src` folder.
- The `node_file.cpp` file in the `src` folder contains the C++ implementation of the `fs.open` function.
- This function calls the `uv_fs_open` function, which is part of the Libuv library.
- The `uv_fs_open` function can be called asynchronously or synchronously.
- Functions that start with `uv_` are references to the Libuv library.
- The Libuv source code contains the lowest-level implementation of Node.js functionality.

## Libuv internals Deep Dive
- Libuv is part of Node.js, but it is also meaningful on its own and has bindings to other programming languages such as Ruby, Lua, C++, and Python.
- The Libuv source code is hosted on GitHub and is written in C.
- The `fs.c` file in the `src/unix` folder contains the implementation of the `fs.open` function for Unix-based operating systems (including Linux and macOS).
- This function calls the `open` function to make a system call to the operating system to open a file and provide a handle for working with it.
- The `fs.c` file in the `src/win` folder contains the implementation of the `fs.open` function for Windows operating systems.
- This function calls the `CreateFileW` function to open a file and provide a handle for working with it.
- The implementation of the `fs.open` function for Windows is longer and more involved than for Unix-based systems, partly due to the need for compatibility between the two.
- Knowledge of C and C++ is not required to use Node.js, as it provides a high-level interface through JavaScript.
- Understanding the internals of Node.js can be helpful but is not necessary for using it.

## Synchronous Vs Asynchronous
- Asynchronous code is code that does not necessarily run line by line in sequence, as opposed to synchronous code which does.
- An example of asynchronous behavior is working on multiple goals at the same time, rather than completing one before moving on to the next.
- In programming, asynchronous functions can run in the background while the program continues to execute other code.
- This allows for tasks such as loading a web page to be performed in the background while the user continues to interact with the browser.
- Asynchronous programming allows for handling multiple tasks side by side.

## Asynchronous Callbacks
- Node.js is an asynchronous, event-driven JavaScript runtime.
- Asynchronous code allows for out-of-order execution, where the order of the code does not necessarily determine the order of execution.
- The `setTimeout` function is an example of an asynchronous function that takes a callback function to be executed at a later time.
- Callback functions allow for code to be executed when an event occurs, such as a timer expiring or a file being read.
- Asynchronous functions immediately return and do not pause execution of the program.

## Non-Blocking input and output
- Blocking code executes synchronously and pauses execution of the program until it completes.
- Non-blocking functions, such as `setTimeout`, execute in the background or in parallel with the rest of the code.
- While waiting for input/output from devices such as the network card or hard drive, the CPU can continue executing other instructions.
- Long-running functions that wait for input/output should be non-blocking to allow for more efficient use of the CPU.

## Multi-Threading, Processes, and Threads
- A process is a program being executed on your computer, such as the Node.js executable.
- Processes contain code that lives in the memory of the process.
- You can create multiple threads within a process to run code asynchronously.
- Each thread has its own call stack, which represents a sequence of operations.
- Function calls are added to the top of the stack, and completed functions are removed from the top.
- Multiple threads can run asynchronously and independently of each other.
- They can be in different states and executing different functions at the same time.
- Processes contain threads that share memory and code, but not call stacks.
- Threads can execute side by side, allowing for asynchronous execution of code.
- The CPU can switch back and forth between threads to simulate parallel execution.
- If the CPU has multiple cores, each core can be dedicated to executing one thread.
- Threads are independent of each other and can be in different states and executing different functions at the same time.
- Multi-threaded programming can be difficult to master, especially in languages like C++ and Java.
- It requires an understanding of concepts such as mutual exclusivity and locks to keep data synchronized between threads.
- Deadlocks, where two threads are stuck waiting for an action that can never occur, are a common issue in multi-threaded programming.
- JavaScript is traditionally a single-threaded language, so it does not have these issues.

## Is Node.js Multi-Threaded?
- Node.js allows developers to run JavaScript code asynchronously without worrying about complicated multithreading logic.
- Node.js has one main thread that runs the V8 engine, JavaScript code, Node APIs, and the event loop.
- Blocking functions in any of these components will cause the program to halt until the function completes.
- The event loop is part of libuv and handles asynchronous functions by executing their callbacks when the result is ready.
- Asynchronous functions are put on the event loop and delegated to the operating system to run.
- Some tasks, such as network operations, are done directly by the operating system.
- Other tasks, such as file system operations, are done in a thread pool.
- The thread pool is a collection of threads set up ahead of time and available to take on work as it comes in.
- If all threads in the thread pool are busy, new tasks must wait until a thread becomes available.
- File system operations are handled by the thread pool, where they run independently of the main thread.
- When the operation completes, the event loop is notified and executes the corresponding callback.
- Not all asynchronous functions use the thread pool; some, such as network operations, are handled directly by the operating system kernel.
- The kernel has multiple threads of its own and is efficient at performing basic operations.
- When an operation finishes running in the operating system, the event loop receives a signal and executes any callback functions.
- The fact that Node.js uses JavaScript, a single-threaded language, is one of its biggest strengths.
- As a Node.js developer, you don't have to worry about managing multiple threads, which simplifies how you write code.
- Node.js knows who should do the work to get the job done, so you don't have to think about it.
- The internals of Node.js and your computer's operating system use multiple threads to perform input/output tasks.
- This allows Node.js to perform non-blocking I/O, which is one of its key strengths.

## The Event Loop
- The event loop is responsible for handling callback functions in Node.js programs, allowing code to execute asynchronously.
- The event loop allows a Node.js program to do multiple things at once, even though JavaScript is a single-threaded language.
- When you start a Node.js program, the event loop starts running as a while loop inside of libuv.
- The loop checks if the Node.js process should exit, and if not, it processes any events that have been sent to the event loop.
- If there are no events, the loop waits until an event is triggered by your program.
- The loop then executes the corresponding callback function and passes off any hard work to the operating system or thread pool.
- The actual event loop code lives in libuv and is implemented in C, not JavaScript.

## Callback Queues
- The event loop processes asynchronous events by going through any relevant callback functions in a loop.
- When Node.js executes an asynchronous function, such as `setTimeout` or a file system function, the operation is sent off to be executed in the background.
- When the operation finishes and the result is ready, any callback functions associated with it are placed onto a queue.
- This queue, called the callback queue, keeps track of which callbacks are ready to be executed.
- New callbacks are added to the bottom of the queue and removed from the top in a first-in, first-out (FIFO) order.
- The oldest function, the one that has been waiting longest, is executed first.
- The queue system ensures that all callback functions get a fair chance to be executed in a reasonable amount of time without interrupting each other.

## Phases of the Event Loop
- The event loop has several different queues, each handling a different phase of the event loop.
- There are four main phases of the event loop: timers, input/output events, setImmediate, and close callbacks.
- Each phase has its own queue of callbacks that are executed during that phase.
- There are three types of timers in Node.js: `setTimeout`, `setInterval`, and `setImmediate`.
- `setTimeout` and `setInterval` execute a callback after a specified delay, while `setImmediate` executes a callback as soon as possible on the event loop.
- The event loop begins by processing the timer callbacks, then moves on to the input/output callbacks, then the setImmediate callbacks, and finally the close callbacks.
- The input/output phase handles the majority of callbacks in a real-life Node.js application.
- The event loop processes callbacks in several phases: timers, input/output events, setImmediate, and close callbacks.
- The setImmediate phase executes after the input/output phase and before another cycle of the event loop starts.
- The close callbacks phase is for when you close a file or network connection and have a callback that executes when the connection is closed.
- After all the close callbacks have been processed, the event loop cycle begins again.
- There are a couple of other phases in the event loop, such as the idle and prepare phases, but these are only used internally by Node.js and are not important for understanding how the event loop interacts with JavaScript.
- By going through all these different phases and queues, the event loop ensures that all the functions in your asynchronous Node.js program eventually execute.

## Comparing Node With PHP and Python
- PHP and Python are both high-level, easy-to-use, single-threaded programming languages, just like JavaScript.
- In the past, PHP and Python followed a traditional model where they needed a web server, such as Apache, to handle multiple requests.
- Apache would spawn a new thread for each request, which meant that the server needed a lot of threads and resources.
- This made it difficult and expensive to build sites that served millions of users.
- In 2009, Node.js became popular because of its non-blocking I/O model, which allowed it to handle thousands of concurrent requests by delegating work to libuv and the operating system.
- This eliminated the need for an additional web server like Apache to create thousands of threads.
- Nowadays, other languages such as Python have integrated support for running an event loop, bringing them closer to Node.js.
- However, none of these languages make it as easy to work with asynchronous programming as JavaScript in Node.js.
- It is still a good idea to use a web server like Apache or Nginx in front of a Node.js server for larger, more complex applications.


## What Is Node.js Best At?
- Node.js is best suited for tasks that involve a lot of input/output (I/O) operations, such as servers that talk to databases and coordinate with other servers and services on the web.
- Node.js is not particularly good at tasks that involve heavy computations, such as video processing or machine learning, because these tasks block the CPU and prevent the event loop from managing other tasks efficiently.
- Node.js works best when the main performance problem is I/O rather than heavy calculations, and when tasks can be delegated to the operating system and devices on the computer.
- Node.js is well-suited for serving data for I/O-heavy applications, which is most of what we do on the internet.
- For example, video streaming services like Netflix use Node.js to send video files from a database through a server and into a user's web browser or application.
- Node.js aligns well with how modern web applications are built, using existing technologies like databases and various services on the web.
- Node.js acts as the glue that puts everything together and was made for the modern web.

## Observer Design Pattern
- The observer design pattern is a common way to deal with events in programming languages.
- Design patterns are proven approaches to solving problems that appear again and again in different programs and applications.
- The observer pattern involves a subject being observed by multiple observers.
- Observers subscribe to events from the subject and are notified when an event relevant to the subject occurs.
- Each observer can react to the event in its own way.
- The observer pattern is useful when the subject triggers a series of events that can be listened to by multiple observers and can occur spontaneously more than once.
- There is a many-to-one relationship between observers and subjects, meaning that one subject can have many observers.
- The observer pattern can be used to model a wide range of scenarios, such as button hover and click events, database operations, and messages being sent over a chat client.
- It is the basis for popular front-end frameworks like React and Angular.

## The Node Event Emitter
- Node.js uses callback functions to notify us of events.
- Node.js has a built-in module called the `events` module that helps us work with events.
- The `events` module is used in the observer pattern, where a subject emits events to a series of observers.
- The `EventEmitter` class is part of the `events` module and is used to emit named events that cause listeners (callback functions) to be called.
- To use the `EventEmitter` class, we call the `require` function on the `events` module.
- We can create instances of the `EventEmitter` class for different subjects that we want to emit events from.
- Observers can subscribe to events from a subject by calling the subject's `on` function and passing in the name of the event and a listener function (callback).
- We can have multiple listeners for the same event, and they will be executed one after the other.
- To trigger an event, we use the `emit` function and pass in the name of the event.

<big><b>Code as discussed in the video:</b></big>
```js
const EventEmitter = require("events");
const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Congratulations! You won the race.");
  }
});

// Subscribe to celebrity for Observer 2
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Boo i could have done better than that");
  }
});

process.on("exit", (code) => {
  console.log("Process exit event with code: ", code);
});

celebrity.emit("race", "win");
celebrity.emit("race", "lost");
```

- The code uses the `events` module to create an instance of the `EventEmitter` class called `celebrity`.
- Two observers subscribe to the `race` event emitted by the `celebrity` using the `on` function.
- The first observer's callback function checks if the result of the race is `"win"` and, if so, prints a congratulatory message to the console.
- The second observer's callback function also checks if the result of the race is `"win"` and, if so, prints a different message to the console.
- The code also includes an example of using the built-in `process` module to respond to the `exit` event when the Node.js process is ready to exit. When the program is done executing and ready to exit, the exit handler is triggered, printing a message to the console that includes the exit code.
- The `celebrity` emits two `race` events: one with a result of `"win"` and one with a result of `"lost"`.
- When the `celebrity` emits a `race` event with a result of `"win"`, both observers' callback functions are executed, printing their respective messages to the console.

