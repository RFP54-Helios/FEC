const axios = require('axios');
const express = require('express');
const app = express();
const path = __dirname + '/../client/dist';
app.use(express.static(path));
const port = 3000

// forward requests to API
const { createProxyMiddleware } = require('http-proxy-middleware');
const API_KEY = require('./config/config.js');
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2';

// add authentication to request header
const proxyOptions = {
  target: apiUrl,
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('Authorization', API_KEY);
  }
}

// establish middleware request forwarding
app.use('/hr-rfp', createProxyMiddleware(proxyOptions));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
