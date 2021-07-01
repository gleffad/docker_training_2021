const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 5372;

app.use(express.text());

app.post('/', (req, res) => {
  // console.log(req.body);
  if (req.body == 'pong') {
    console.log('pinging server 0');
    console.log('pong recieved from server 0');
    setTimeout(() => {
      fetch('http://localhost:4567', {
        method: 'POST',
        body: 'ping',
        headers: { 'Content-Type': 'text/plain' },
      }).catch((err) => {
        console.log('Err : cannot ping server 0');
        
      });
    }, 500);
  }
});

app.listen(port);