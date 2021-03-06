const { response, request } = require('express');
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Starting server at ${port}`));

app.use(express.static('./public'));

// Parsing incoming data as JSON
app.use(express.json({ limit: '1mb' }));

// TEST POST Endpoint (for Async function 1)
// We don't use post in our app, this was just a test
app.post('/lotid', (request, response) => {
	console.log(request.body);
	lotid = request.body.lotid;
	console.log(lotid);
	// Handling the response
	response.json({
		status: 'success',
		lotid: lotid,
		password: 123
	});
});

app.get('/getlot/:lotid', async (request, response) => {
	// API Key:
	const apiKey = process.env.API_KEY;

	// Getting LodID from the REQUEST parameters:
	const lotid = request.params['lotid'];

	// Fetch Request:
	fetch(`https://bext360api.azure-api.net/retail/v1/getlot/${lotid}`, {
		method: 'GET',
		headers: {
			'Ocp-Apim-Subscription-Key': apiKey
		}
	})
		.then((result) => {
			// console.log(result);
			return result.json();
		})
		.then((data) => {
			// Logging data on the server

			// Sending data as a RESPONSE to the fronted
			response.json(data);
		})
		.catch((error) => {
			console.log('Please enter a valid lot ID');
			response.json(error);
		});
});

app.get('/getimage/:imageid', async (request, response) => {
	// API Key:
	const apiKey = process.env.API_KEY;

	// Getting LodID from the REQUEST parameters:
	const imageid = request.params['imageid'];

	// Fetch Request:
	fetch(`https://bext360api.azure-api.net/retail/v1/getimage/${imageid}`, {
		method: 'GET',
		headers: {
			'Ocp-Apim-Subscription-Key': apiKey
		}
	})
		.then((result) => {
			// console.log(result);
			return result.json();
		})
		.then((data) => {
			// console.log(data);

			// Sending data as a RESPONSE to the fronted
			response.json(data);
		})
		.catch((error) => {
			console.log('Please enter a valid image ID');
		});
});

app.get('/getvideo/:videoid', async (request, response) => {
	// API Key:
	const apiKey = process.env.API_KEY;

	// Getting LodID from the REQUEST parameters:
	const videoid = request.params['videoid'];

	// Fetch Request:
	fetch(`https://bext360api.azure-api.net/retail/v1/getvideo/${videoid}`, {
		method: 'GET',
		headers: {
			'Ocp-Apim-Subscription-Key': apiKey
		}
	})
		.then((result) => {
			// console.log(result);
			return result.json();
		})
		.then((data) => {
			// console.log(data);

			// Sending data as a RESPONSE to the fronted
			response.json(data);
		})
		.catch((error) => {
			response.json(error);
			console.log('Please enter a valid video ID');
		});
});

app.get('/getnode/:nodeid', async (request, response) => {
	// API Key:
	const apiKey = process.env.API_KEY;

	// Getting LodID from the REQUEST parameters:
	const nodeid = request.params['nodeid'];

	// Fetch Request:
	fetch(`https://bext360api.azure-api.net/retail/v1/getnode/${nodeid}`, {
		method: 'GET',
		headers: {
			'Ocp-Apim-Subscription-Key': apiKey
		}
	})
		.then((result) => {
			// console.log(result);
			return result.json();
		})
		.then((data) => {
			// console.log(data);
			// Sending data as a RESPONSE to the fronted
			response.json(data);

			// Subsequent API Calls:
		})
		.catch((error) => {
			response.json(error);
			console.log('Please enter a valid node ID');
		});
});

// Get Request Endpoint for Lot History
app.get('/getlothistory/:lotid', async (request, response) => {
	// API Key:
	const apiKey = process.env.API_KEY;

	// Getting LodID from the REQUEST parameters:
	const lotid = request.params['lotid'];

	// Fetch Request:
	fetch(`https://bext360api.azure-api.net/retail/v1/getlothistory/${lotid}`, {
		method: 'GET',
		headers: {
			'Ocp-Apim-Subscription-Key': apiKey
		}
	})
		.then((result) => {
			// console.log(result);
			return result.json();
		})
		.then((data) => {
			// console.log(data);
			// Sending data as a RESPONSE to the fronted
			response.json(data);

			// Subsequent API Calls:
		})
		.catch((error) => {
			console.log('Please enter a valid lot ID');
		});
});
