const axios = require('axios');
const express = require('express');
const path = __dirname + '/../client/dist';
const app = express();
app.use(express.static(path));
const port = 3000

const { createProxyMiddleware } = require('http-proxy-middleware');
const API_KEY = require('./config/config.js');

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2';

const proxyOptions = {
  target: apiUrl,
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('Authorization', API_KEY);
  }
}

app.use('/hr-rfp', createProxyMiddleware(proxyOptions));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
