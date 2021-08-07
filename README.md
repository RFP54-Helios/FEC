# FEC

Front End Capstone repository for RFP54's Team Helios!

## Running the App Locally

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

