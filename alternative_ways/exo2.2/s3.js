const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3003
const fetch = require('node-fetch');
let serverData = ""
let dataServer = {}
//you must run s3 and then s1

app.use(bodyParser.json());
app.post('/', function (request, response) {
  console.log(request.body);
  serverData = serverData + JSON.stringify(request.body)
});

app.get('/', (req, res) => {
  dataServer = serverData.replace(/}/g, ',')
  serverData = dataServer.replace(/{/g, '')
  dataServer = '{' + serverData.slice(0, -1) + '}'
  res.json(JSON.parse(dataServer))
})


app.listen(port, () => {
  console.log(`Middle server at http://192.168.1.15:${port}`)
})
