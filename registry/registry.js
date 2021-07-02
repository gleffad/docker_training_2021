const express = require('express');
const app = express();
const port = 8080;

const servers = ['http://172.16.8.98:5372', 'http://172.16.8.98:4567'];

app.get('/', (req, res) => {
	res.send(servers);
});

app.listen(port);