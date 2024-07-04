# nextechy Website

## Description

This repository contains the code for the nextechy website, inspired by the tutorials from [ThapaTechnical](https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA). The website is a simple HTML template with dynamic content rendered using Express.js. It includes sections for the home page, about us, services, maps, and contact information. The styling is done using [Bootstrap](https://getbootstrap.com/), and the data is stored in a [MongoDB](https://www.mongodb.com/) database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [MongoDB Connection](#mongodb-connection)
- [Express App](#express-app)

## Installation

1. Clone the repository:

    ```bash
    git clone (https://github.com/faizan736/Project-nexus/tree/main/Project3
    cd Project3
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up MongoDB:
    - Ensure MongoDB is installed on your local machine.
    - Update the database connection details in [db/conn.js](./db/conn.js) if needed.

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Open a web browser and visit [http://localhost:3000](http://localhost:3000) to view the nextechy website.

## Project Structure

- `public/`: Contains static assets (CSS, JS, images) for the client-side.
- `templates/`: Holds Handlebars templates for rendering views.
  - `views/`: Main views like [index.hbs](./templates/views/index.hbs).
  - `partials/`: Reusable components like headers, footers, etc.
- `db/`: Contains the MongoDB connection setup ([conn.js](./db/conn.js)).
- `models/`: Includes the MongoDB schema and model definitions ([usermessage.js](./models/usermessage.js)).
- [app.js](./app.js): Main application file with Express.js setup and routing.

## MongoDB Connection

### [db/conn.js](./db/conn.js)

This file contains the configuration for connecting to a MongoDB database using [Mongoose](https://mongoosejs.com/). It includes the connection setup and handling of connection status.

## Express App

### [app.js](./app.js)

The Express.js application file includes middleware setup, routing for different endpoints, and server setup. It uses [Handlebars (`hbs`)](https://handlebarsjs.com/) as the view engine, and static assets are served using Express middleware.

- **Middleware**:
    - Static assets are served for [Bootstrap](https://getbootstrap.com/) and [jQuery](https://jquery.com/).
    - Body parser is used to parse incoming request bodies.
    - Handlebars is configured as the view engine, and partials are registered.

- **Routing**:
    - Home page (`/`) renders the [index](./templates/views/index.hbs) view.
    - Form submission endpoint (`/contact`) handles POST requests, saving user data to the MongoDB database.

- **Server Setup**:
    - The server listens on port 3000 by default. Check the console for the server running message.

    ```bash
    server running at port 3000
    ```

## References

-  [MDN docs](https://developer.mozilla.org/en-US/)
-  [StackOverflow](https://stackoverflow.com/)
-  [ThapaTechnical](https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA)
