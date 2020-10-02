/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

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
// 	// "https://bext360api.azure-api.net/retail/v1/getnode/6f93c9fc-6a58-41a7-9880-413b6ed87ecd"
// 	// GWP Harvest node ID: 6f93c9fc-6a58-41a7-9880-413b6ed87ecd
// 	// GWP Cherry Float node ID: 3b919eb4-416a-49f0-b7c9-60c6cd2adc62
// 	// GWP Cherry Sort node ID: 50f23fa9-95c3-4d64-8625-4ea701701cc4

// 	// API Key: 1ae21229feda4e11870d9066d2b483f0
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

// Harvest node ID: 6f93c9fc-6a58-41a7-9880-413b6ed87ecd
// Cherry Float node ID: 3b919eb4-416a-49f0-b7c9-60c6cd2adc62
// Cherry Sort node ID: 50f23fa9-95c3-4d64-8625-4ea701701cc4
// De-Pulping node ID: 0270eada-dbb8-45dc-a38d-cffc166d87ea
// Fermentation node ID: 69af024d-0b63-4d1e-a2c1-151de7fa780e
// Washing node ID: e648dad3-57eb-4164-9130-fc668044a1e1
// Drying node ID: edbba30f-bd9a-43ba-b473-a3ff42d69d59
// Wet Parchment Transport node ID: 09904d68-7b7e-43ca-8725-87dacee6f536

function getNodeName(nodeId) {
	const apiKey = '1ae21229feda4e11870d9066d2b483f0';
	fetch(`https://bext360api.azure-api.net/retail/v1/getnode/${nodeId}`, {
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
			const nodeName = data.nodeName;
			const nodeCity = data.defaultLocation.city;
			// return nodeName;
			console.log(nodeCity);
		})
		.catch((error) => {
			console.log(error);
		});
}

// getNodeName('6f93c9fc-6a58-41a7-9880-413b6ed87ecd');

// LotID:
// b672f566-bd19-4c81-ab40-8100d51d13a6

document.getElementById('get-lot-id').onclick = function() {
	let lotID = document.getElementById('lot-id').value;

	if (lotID) {
		const apiKey = '1ae21229feda4e11870d9066d2b483f0';
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

// Getting Parameters from URL

// NodeID:
// 6f93c9fc-6a58-41a7-9880-413b6ed87ecd

window.onload = function() {
	let url_string = window.location.href.toLowerCase();
	let url = new URL(url_string);
	let nodeid = url.searchParams.get('nodeid');
	console.log(`Node id = ${nodeid}`);
	if (nodeid) {
		const apiKey = '1ae21229feda4e11870d9066d2b483f0';
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
				const nodeID = data.nodeId;
				const nodeName = data.nodeName;
				const nodeCity = data.defaultLocation.city;

				document.getElementById('node-id').innerHTML = `Node ID - ${nodeID}`;
				document.getElementById('node-name').innerHTML = `Node Name - ${nodeName}`;
				document.getElementById('node-city').innerHTML = `Node City - ${nodeCity}`;
			})
			.catch((error) => {
				console.log(error);
			});
	} else {
	}
};
