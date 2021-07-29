const axios = require('axios');
const express = require('express');
const path = __dirname + '/../client/dist';
const app = express();
app.use(express.static(path));
const port = 3000

const API_KEY = require('./config/config.js');

app.get('/api/', (req, res) => {
  // forward request to API route
  axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products", {
    headers: {
      'Authorization': API_KEY
    }
  })
  .then((response) => {
    res.json(response.data)
  })
  .catch((error) => {
    res.sendStatus(404)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
