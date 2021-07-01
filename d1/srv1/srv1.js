const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 5372;

app.use(express.text());

app.post('/', (req, res) => {
  if (req.body == 'pong') {
    console.log('pong from server 0');
    setTimeout(async () => {
      let resept;
      await fetch('http://localhost:8080')
        .then((res) => res.json())
        .then(
          (body) =>
          (resept = body.filter(
            (p) => p != 'http://localhost:' + port 
          )[0])
        );
      await fetch(resept, {
        method: 'POST',
        body: 'ping',
        headers: { 'Content-Type': 'text/plain' },
      }).catch((err) => {
        console.log('Error');
      });
    }, 500);
  }
});

app.listen(port);