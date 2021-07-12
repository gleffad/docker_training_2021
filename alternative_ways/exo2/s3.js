const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3003
const fetch = require('node-fetch');


app.get('/', (req, res) => {
  res.json({ 
    server1: 'http://localhost:3001/',
    server2: 'http://localhost:3002/'
 })
})


app.listen(port, () => {
  console.log(`Middle server at http://localhost:${port}`)
})
