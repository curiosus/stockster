const express = require('express');
const http = require('https');
const cors = require('cors');
const config = require('./config.js');

const server = express();


const options = (sym) => {
	return {
		'method': 'GET',
		'hostname': config.apiUrl,
		'port': null,
		'path': '/market/get-quotes?region=US&lang=en&symbols=' + sym,
		'headers': {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'x-rapidapi-host': config.apiUrl,
			'x-rapidapi-key': config.rapidapikey
		}
	};
}

server.use(cors({origin: 'http://localhost:3000'}));

server.get('/', (req, res) => {
	res.send('Home Page');
});

server.get('/stock', (request, response) => {
	const sym = request.query.sym;
	let req = http.request(options(sym), (res) => {
		let chunks = [];
		res.on('data', function(chunk) {
			chunks.push(chunk);
		});

		res.on('end', () => {
			let body = Buffer.concat(chunks);
			response.setHeader('Content-Type', 'application/json');
			let j = JSON.parse(body);
			response.json(j);
		});

	});
	req.end();
});




server.listen(4242, () => {
  console.log('Stockster is up and running on 4242');
});
