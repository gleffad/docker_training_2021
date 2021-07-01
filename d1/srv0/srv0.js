const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 4567;
let serv = '';

app.use(express.text());

const connect = async (req) => {
    if (!serv) {
        await fetch('http://localhost:8080')
            .then((res) => res.json())
            .then(
                (body) =>
                (toto = body.filter(
                    (p) => p != 'http://localhost:' + port 
                )[0])
            );
    }
    await fetch(toto, {
        method: 'POST',
        body: 'pong',
        headers: { 'Content-Type': 'text/plain' },
    }).catch((err) => {
        console.log('Error');
        setTimeout(() => {
            connect();
        }, 500);
    });
};

connect();

app.post('/', (req, res) => {
    if (req.body == 'ping') {
        console.log('ping from server 1');
        connect();
    }
});

app.listen(port);