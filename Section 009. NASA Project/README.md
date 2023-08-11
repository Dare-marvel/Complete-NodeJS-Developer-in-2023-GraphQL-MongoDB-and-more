## Introduction & Architecture
- When building a full-stack web application, it is important to think about the structure of the project and do a little bit of work upfront to ensure that the project gets off on the right foot. This often involves creating an architectural diagram to visualize the different parts of the project and how they interact.
- In the case of the NASA mission control dashboard, the project will have both a server component for the API and a client component for the front-end. These components can be organized into separate folders within the project directory.
- Architectural diagrams can be created using tools such as Lucidchart, Microsoft Visio, GIPHY, Dia, or even Photoshop or Sketch. These diagrams help project architects and senior developers visualize the different parts of the project and how they interact, making it easier to plan and organize the project.
- When building a large, full-stack web application, it is important to think about the structure of the project and organize the code in a way that makes it easy to maintain and update. One common pattern used in Express servers is the MVC (Model-View-Controller) pattern, which separates the code into models, views, and controllers.
- In a client-server application, the client (front-end) is responsible for displaying data to the user and allowing them to perform actions, while the server (back-end) is responsible for handling requests from the client and updating the data stored on the server side. The server can be organized into separate folders for models, routes, and controllers, with related code kept together.
- It is also common in large-scale applications to create multiple Node packages for different parts of the application that all live inside the main project folder. For example, the front-end and back-end components of the application may each have their own package.json file.
- Yes, in a large-scale application, it is common to have multiple `package.json` files for different parts of the application that all live inside the main project folder. For example, the front-end and back-end components of the application may each have their own `package.json` file, and there may also be a `package.json` file at the root of the project folder that wraps the two packages for the server and client.
- It is important to manage these `package.json` files using npm, rather than writing them out by hand. This can be done by running npm commands such as `npm init` and `npm install` to create and update the `package.json` files. This allows you to easily manage dependencies and run npm scripts for each of the inner packages in your server and client.


## NASA Dashboard Front End Setup
The front-end code for the NASA mission control dashboard has been created using the popular React framework and set up using Create React App, a tool that simplifies the process of setting up a React application. Here are the main points to keep in mind:

- The front-end code for the NASA mission control dashboard has been created using the React framework.
- The project was set up using Create React App, a tool that simplifies the process of setting up a React application.
- Create React App allows developers to focus on writing code rather than dealing with complicated build systems.
- The front-end project is an npm package with React as a dependency and includes several scripts using `react-scripts`, a tool used by Create React App to make development easier.
- The project also uses Arwes, a science fiction UI framework, for its components.
- Before running the front-end code for the NASA mission control dashboard, you need to install the dependencies by running `npm install` from within the `client` directory.
- Once the dependencies are installed, you can start the front-end application by running `npm start` from within the `client` directory.
- This will start the application and open it in your browser at `localhost:3000`, which is the default port used by Create React App.
- The front-end engineers at NASA have prepared a beautiful dashboard for the mission control front-end, which you can explore and build upon as you integrate it with the back-end API.

## NASA Dashboard Functionality
Sure! Here's a simplified explanation of the paragraphs in point format for note-making purposes:

- The front end of the Naza mission control dashboard is being served on port 43000.
- The dashboard supports the launch of NASA's missions towards the Kepler exoplanets.
- The main page displays the criteria for habitable planets, which includes:
    - Planetary radius less than 1.6 times that of Earth.
    - Stellar flux value between 36% and 111% of Earth's sunlight.
- The launch date can be set using a calendar picker and must be in the future.
- The mission name can be set as text, e.g. "Kepler exploration".
- The rocket type defaults to "Explorer Interstellar One", specific to the Kepler exoplanets project.
- The destination exoplanets can be selected from a dropdown list populated by an API.
- Launching a mission adds it to the "Upcoming" tab, which includes both SpaceX and Interstellar Zero to Mars Three rockets.
- Upcoming launches display the flight number, scheduled date, mission name, rocket type, and destination exoplanet.
- Missions can be aborted by clicking on an "X" symbol in the list.
- The "History" tab displays past launches, including those that were aborted or failed.
- Instead of displaying the destination exoplanet, the history tab shows a list of customers associated with the mission.
- Currently, the UI is interactive but not functional. An API is needed for the dashboard to actually do something.

## What You Need To Know
- React is a popular front-end library for building user interfaces.
- As a back-end developer, it's helpful to have a general understanding of front-end project structure and interaction with back-end API.
- The goal of the next video is to give a general idea of the structure of the front-end project.
- Don't worry if you don't understand everything right away, take it one step at a time.

## React.js Front End Code Walkthrough

## 
