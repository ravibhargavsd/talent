const express = require('express')
var cors = require('cors')
var fs = require('fs');
const app = express()
const port = 3000;
app.use(cors());

const getFileData = (fileName) => {
  var data;
  try {
    data = fs.readFileSync(`./mocks/${fileName}.json`, 'utf-8');
  } catch {
    data = fs.readFileSync(`./mocks/123.json`, 'utf-8');
  }
  return JSON.parse(data);
}

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/getProfile', (req, res) => res.send(getFileData('getProfile')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})