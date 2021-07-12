require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3002
const fetch = require('node-fetch');
const address = process.env.IPADDRESS
let serverComunication = ''

/**
 * the s2 sends his ip address to s3
 */
function sendAddress() {
  fetch(address + ":3003", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ server2: address + ":3002/" }),
  })
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
    });
}
sendAddress();

/**
 * s2 try to get the s4 server ip address
 */
function getServer() {
  setTimeout(function () {
    fetch(address + ":3003", {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        serverComunication = res.server4
      })
      .catch(res => {
      })
    getServer();
  }, 500)
}
getServer();


async function sendMessage() {
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
  }, 1000)
}
sendMessage();

// s2 recive message from other servers
app.use(bodyParser.json());
app.post('/', function (request, response) {
  console.log(request.body);
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})
