const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 4567;

app.use(express.text());

const connect = (req) => {
    fetch('http://localhost:5372', {
        method: 'POST',
        body: 'pong',
        headers: { 'Content-Type': 'text/plain' },
    }).catch((err) => {
        console.log('Err : cannot pong server 1');
        setTimeout(() => {
            connect();
        }, 500);
    });
};

app.post('/', (req, res) => {
    if (req.body == 'ping') {
        console.log('ponging server 1');
        console.log('ping recieved from server 1');
        connect();
    }
});

connect();

app.listen(port);