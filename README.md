# FEC

Front End Capstone repository for RFP54's Team Helios!

This capstone project tasked Team Helios with the challenge of redesigning an outdated retail portal. The redesign implemented a new user interface, and introduced significant client experience functionality.

What challenge called for the use of this technology
How did we implement it to meet that challenge?

---

## Tech Stack and Challenges

<code><img width="15%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"></code>

- In order to implement a responsive, single-page application capable of dynamically rendering with third-party API data, we utilized React Context and Hooks.

<code><img width="15%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"></code>

- Despite being a front-end capstone that explicitly placed back-end implementation out of scope, used Nodejs to utilize Express

<code><img width="15%" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"></code>

- Simplified API requests by implementing a proxy server in Express.js to an existing RESTful API
- http-proxy-middleware

<code><img width="15%" src="https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg
"></code>

- Aside from aesthetic styling, the use of Grid made the overlay button functionality in the Gallery simple. Flexbox was instrumental in handling the dynamic data being delivered to the page.
- Flexbox, Grid

<code><img width="15%" src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-ar21.svg"></code>

- Each of the contributors took ownership over one of the 4 widgets present on the page. Integrating these components called for rigorous, automated testing.

<code><img width="15%" src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-ar21.svg"></code>

- Webpack was our solution to elegantly handle our numerous static assets, implement JSX, and harness ES6 in this project.

---

## Set up Instructions

How to host this single page application on your local machine.

1. Make sure you've pulled the version you want to run (see Git Workflow)
1. Make a copy of the file 'server/config/config.example.js` and rename to 'config.js'
1. Assign the `API_KEY` variable to your GitHub token
1. Install dependencies

    ```bash
    npm install
    ```

1. In one terminal, build the webpack bundle

    ```bash
    npm run watch
    ```

1. In another terminal, start the server

    ```bash
    npm start
    ```

1. Visit [localhost:3000](http://localhost:3000) in the browser

---

## App Components

### Overview

### Related Products

### Questions & Answers

### Ratings & Reviews
