const express = require('express');
const app = express();
const port = 8080;
const com0 = ['http://172.16.8.98:4567'];
const com1 = ['http://172.16.8.98:5372'];
const brokers = ['http://172.16.8.98:80'];
const servers = { com0, com1, brokers };

//usages
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

//listening on specified port
app.listen(port);

//path to get every servers lists
app.get('/', (req, res) => {
	res.send(servers);
});

/**
 * registering point for all servers,
 * sending back the addr of the broker to the caller
**/
app.post('/register', (req, res) => {
	switch (req.body.src_type) {
		case 'com0':
			com0.push(req.body.addr);
			try {
				res.send({ broker_addr: broker[0] })
			} catch (err) {
				console.log("Error : fail to send broker's address to com0");
			}
			break;
		case 'com1':
			com1.push(req.body.addr);
			try {
				res.send({ broker_addr: broker[0] })
			} catch (err) {
				console.log("Error : fail to send broker's address to com1");
			}
			break;
		case 'broker':
			brokers.push(req.body.addr);
			break;
	}
})

app.post('/getDestinationAddress', (req, res) => {
	req.body.src_type == com0 ? res.send({ dest_addr: com1[0] }) : res.send({ dest_addr: com1[0] })
}