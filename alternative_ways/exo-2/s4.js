require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3004
const fetch = require('node-fetch');
const address = process.env.IPADDRESS
let serverComunication = ''
let message = { "message": "null" }
let choise = 1

function sendAddress() {
  fetch(address + ":3003", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ server4: address + ":3004/" }),
  })
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
    });
}
sendAddress();

app.use(bodyParser.json());
app.post('/', function (request, response) {
  message = request.body
  console.log(message)
});

function getServerAndSendMessage() {
  setTimeout(function () {
    fetch(address + ":3003", {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (choise === 1) {
          serverComunication = res.server1
          choise = 2
        }
        else {
          serverComunication = res.server2
          choise = 1
        }

      })
      .catch(res => {
      })

    //POST request with body equal on data in JSON format
    fetch(serverComunication, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.text())
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log(data);
      })
      //Then if an error is genereted...
      .catch((error) => {
      });

    getServerAndSendMessage();
  }, 500)
}
getServerAndSendMessage();


// sendMessage();

app.listen(port, () => {
  console.log(`Example app listening at :${port}`)
})
