const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3002
const fetch = require('node-fetch');
let serverComunication = ''

function sendAddress() {
  fetch("http://192.168.1.15:3003", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ server2: "http://192.168.1.15:3002/" }),
  })
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
    });
}
sendAddress();

function getServer() {
  setTimeout(function () {
    fetch("http://192.168.1.15:3003", {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        serverComunication = res.server1
      })
      .catch(res => {
      })
    getServer();
  }, 500)
}
getServer();




function sendMessage() {
  setTimeout(function () {
    //POST request with body equal on data in JSON format
    fetch(serverComunication, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "message": "ping" }),
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
  console.log(`Example app listening at http://192.168.1.15:${port}`)
})


