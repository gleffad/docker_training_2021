const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3001
const fetch = require('node-fetch');


function sendMessage() {
  setTimeout(function () {
    //POST request with body equal on data in JSON format
    fetch('http://localhost:3002', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "message": "pong" }),
    })
      .then((res) => res.text())
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log(data);
      })
      //Then if an error is genereted...
      .catch((error) => {
      });
    sendMessage();
  }, 500)
}
sendMessage();

app.use(bodyParser.json());
app.post('/', function (request, response) {
  console.log(request.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
