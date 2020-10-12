/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

async function getLotImage(imageID) {
	const imageid = imageID;
	// Local Path
	const api_url = `getlotimage/${imageid}`;

	// Get Fetch request to a Local Path
	const response = await fetch(api_url);

	// Converting response into JSON
	const json = await response.json();

	// Console logging the response:
	console.log(json);
	let base64blob = json;
	document.getElementById('roasting-img').src = 'data:image/png;base64,' + base64blob;
}

async function getLot(lotID) {
	const lotid = lotID;
	// Local Path
	const api_url = `getlot/${lotid}`;

	// Get Fetch request to a Local Path
	const response = await fetch(api_url);

	// Converting response into JSON
	const json = await response.json();

	// Console logging the response:
	console.log(json);

	// Checking if Lot has images
	if (json.images[0]) {
		console.log('Lot has images');
		console.log(json.images[0].id);
		console.log(json.customData['CuppersNotes.Measure'].value);
		getLotImage(json.images[0].id);
	} else {
		console.log('Lot has no images');
	}

	// DOM Manipulation
	document.getElementById('lot-cuppers-notes').innerHTML = `Cuppers Notes: ${json.customData['CuppersNotes.Measure']
		.value}`;
	document.getElementById('lot-roast-date').innerHTML = `Roast Date: ${json.customData['RoastDate.MeasureTime']
		.value}`;
	document.getElementById('lot-farmer-name').innerHTML = `Roaster: ${json.customData['FarmerName.Measure'].value}`;
}

async function getNode(nodeID) {
	const nodeid = nodeID;
	// Local Path
	const api_url = `getnode/${nodeid}`;

	// Get Fetch request to a Local Path
	const response = await fetch(api_url);

	// Converting response into JSON
	const json = await response.json();

	// Console logging the response:
	console.log(json);

	// Checking if Node has images
	if (json.images[0]) {
		console.log('Node has images');
		console.log(json.images[0].id);
		getNodeImage(json.images[0].id);
	} else {
		console.log('Node has no images');
	}

	// DOM Manipulation
	document.getElementById('node-city').innerHTML = `City: ${json.defaultLocation.city}`;
	document.getElementById('node-state').innerHTML = `State: ${json.defaultLocation.state}`;
	document.getElementById('node-country').innerHTML = `Country: ${json.defaultLocation.country}`;
}

async function getLotHistory(lotID) {
	const lotid = lotID;
	// Local Path
	const api_url = `getlothistory/${lotid}`;

	// Get Fetch request to a Local Path
	const response = await fetch(api_url);

	// Converting response into JSON
	const json = await response.json();

	// Console logging the response:
	console.log(json);

	// Displaying data in the DOM:
}

// Grabbing LotID from the URL & calling a function
window.onload = function() {
	const url_string = window.location.href.toLowerCase();
	const url = new URL(url_string);
	const lotid = url.searchParams.get('lotid');
	// Function Call:
	// getLotHistory(lotid);
	getLot(lotid);
	getNode('73427e9e-e29d-4b33-9a27-95244bdb0370');
};
// Testing Section End ---------------------------------
(function($) {
	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: [ '1141px', '1680px' ],
		large: [ '981px', '1140px' ],
		medium: [ '737px', '980px' ],
		small: [ '481px', '736px' ],
		xsmall: [ '321px', '480px' ],
		xxsmall: [ null, '320px' ]
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('.scrolly').scrolly();
})(jQuery);

// $(function() {
// 	$.ajax({
// 		url: 'https://bext360api.azure-api.net/retail/v1/getnode/3b919eb4-416a-49f0-b7c9-60c6cd2adc62',
// 		beforeSend: function(xhrObj) {
// 			// Request headers
// 			xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', '1ae21229feda4e11870d9066d2b483f0');
// 			// xhrObj.setRequestHeader("Access-Control-Allow-Origin", "*");
// 		},
// 		type: 'GET'
// 		// Request body
// 		// data: "{body}",
// 	})
// 		.done(function(data) {
// 			console.log('success');
// 			console.log(data);
// 		})
// 		.fail(function() {
// 			console.log('error');
// 		});
// });

function getNodeName(nodeId) {
	const apiKey = '74ef3c49a75845ea9b02924702956447';
	fetch(`https://bext360api.azure-api.net/retail/v1/getnode/${nodeId}`, {
		method: 'GET',
		headers: {
			'Ocp-Apim-Subscription-Key': apiKey
		}
	})
		.then((result) => {
			return result.json();
		})
		.then((data) => {
			console.log(data);

			// Cheking if node has images
			if (data.images) {
				// Implement Loop Here:
				let imageID = data.images[0].id;
				console.log(`This is the image ID: ${imageID}`);

				// Get Image API Call
				fetch(`https://bext360api.azure-api.net/retail/v1/getimage/${imageID}`, {
					method: 'GET',
					headers: {
						'Ocp-Apim-Subscription-Key': apiKey
					}
				})
					.then((result2) => {
						return result2.json();
					})
					.then((data2) => {
						// Apply Image formatting here
						console.log(`This is an image ${data2}`);
					})
					.catch((error) => {
						console.log(error);
					});
			}
		})
		.catch((error) => {
			console.log(error);
		});
}
// getNodeName('6f93c9fc-6a58-41a7-9880-413b6ed87ecd');

// NodeID:
// 6f93c9fc-6a58-41a7-9880-413b6ed87ecd
// LotID:
// b672f566-bd19-4c81-ab40-8100d51d13a6

document.getElementById('get-lot-id').onclick = function() {
	let lotID = document.getElementById('lot-id').value;

	if (lotID) {
		const apiKey = '74ef3c49a75845ea9b02924702956447';
		fetch(`https://bext360api.azure-api.net/retail/v1/getlot/${lotID}`, {
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
				console.log(data);
				const lotName = data.lotName;
				const productName = data.productName;
				const lotType = data.lotType;
				const createdDate = data.createdDate;
				const currentWeight = data.currentWeight;
				console.log(lotName, productName, lotType, createdDate, currentWeight);
				document.getElementById('lot-name').innerHTML = `<strong>Lot Name: </strong>${lotName}`;
				document.getElementById('product-name').innerHTML = `<strong>Product Name: </strong>${productName}`;
				document.getElementById('lot-type').innerHTML = `<strong>Lot Type: </strong>${lotType}`;
				document.getElementById('created-date').innerHTML = `<strong>Created Date: </strong>${currentWeight}`;
				document.getElementById(
					'current-weight'
				).innerHTML = `<strong>Current Weight: </strong>${currentWeight}`;
			})
			.catch((error) => {
				// document.getElementById('lot-name').innerHTML = 'Please enter a valid lot ID';
				alert('Please enter a valid lot ID');
			});
	} else {
		// document.getElementById('lot-name').innerHTML = 'Please enter a valid lot ID';
		alert('Please enter a valid lot ID');
	}
};

window.onload = function() {
	let url_string = window.location.href.toLowerCase();
	let url = new URL(url_string);
	let nodeid = url.searchParams.get('nodeid');
	console.log(`Node id = ${nodeid}`);
	if (nodeid) {
		const apiKey = '74ef3c49a75845ea9b02924702956447';
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
				console.log(data);
				const nodeID = data.nodeId;
				const nodeName = data.nodeName;
				const nodeCity = data.defaultLocation.city;

				document.getElementById('node-id').innerHTML = `Node ID - ${nodeID}`;
				document.getElementById('node-name').innerHTML = `Node Name - ${nodeName}`;
				document.getElementById('node-city').innerHTML = `Node City - ${nodeCity}`;

				// Image Part Start:

				if (data.images[0]) {
					// Implement Loop Here:
					let imageID = data.images[0].id;
					console.log(`This is the image ID: ${imageID}`);

					// Get Image API Call
					fetch(`https://bext360api.azure-api.net/retail/v1/getimage/${imageID}`, {
						method: 'GET',
						headers: {
							'Ocp-Apim-Subscription-Key': apiKey
						}
					})
						.then((response) => {
							// return response.blob();
							return response.json();
						})
						.then((myBlob) => {
							// Apply Image formatting here
							let base64blob = myBlob;
							document.getElementById('myImage').src = 'data:image/png;base64,' + base64blob;
						})
						.catch((error) => {
							console.log(error);
						});
				}

				// Image Part End

				// Video Part Start
				if (data.videos[0]) {
					// Implement Loop Here:
					console.log(data.videos[0].id);
					let videoID = data.videos[0].id;
					console.log(`This is the video ID: ${videoID}`);

					// Get Video API Call
					fetch(`https://bext360api.azure-api.net/retail/v1/getvideo/${videoID}`, {
						method: 'GET',
						headers: {
							'Ocp-Apim-Subscription-Key': apiKey
						}
					})
						.then((response) => {
							// return response.blob();
							return response.json();
						})
						.then((myBlob) => {
							// Apply Image formatting here
							let base64blob = myBlob;
							document.getElementById('myVideo').src = 'data:video/mp4;base64,' + base64blob;
						})
						.catch((error) => {
							console.log(error);
						});
				}
				// Video Part End
			})
			.catch((error) => {
				console.log(error);
			});
	} else {
	}
};
