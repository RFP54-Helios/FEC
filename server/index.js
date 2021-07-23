const express = require('express');
const path = __dirname + '/../client/dist';
const app = express();
app.use(express.static(path));
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})