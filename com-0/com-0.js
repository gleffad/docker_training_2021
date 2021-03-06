const express = require('express');
const fetch = require('node-fetch');
const app = express();
const registry_addr = 'http://172.16.8.98:8080';
const my_addr = 'http://172.16.8.98:4567';
const registered_frame = null;

app.use(express.text());

//sending address to the registry
if (!registered) {
    fetch(registry_addr + '/register',
        {
            method: 'POST',
            body: JSON.stringify({
                addr: my_addr,
                type: 'com0'
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then((body) => registered_frame = body.JSON)
        .catch((err) => {
            console.log('Error : fail to register address');
            registered = null;
        });
}

const connect = async (req) => {
    if (!serv) {
        await fetch('http://172.16.8.98:8080')
            .then((res) => res.json())
            .then(
                (body) =>
                (toto = body.filter(
                    (p) => p != 'http://172.16.8.98:' + port
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