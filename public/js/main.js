// Navbar Scripr
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('activated');
	toggleButton.classList.toggle('change');
});

// Function for making anchors link 100 pixles above the target
// Applying the offset
function offsetAnchor() {
	if (location.hash.length !== 0) {
	  window.scrollTo(window.scrollX, window.scrollY - 100);
	}
  }
  
  // Capturing click events of all a elements with href starting with #
  window.addEventListener("hashchange", function(event) {
	// Click events are captured before hashchanges. Timeout
	// causes offsetAnchor to be called after the page jump.
	window.setTimeout(function() {
	  offsetAnchor();
	}, 0);
  });
  
  // Setting the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0);

// async function getLotImage(imageID) {
// 	const imageid = imageID;
// 	console.log(`This is the lot image ID = ${imageID}`);
// 	// Local Path
// 	const api_url = `getlotimage/${imageid}`;

// 	// Get Fetch request to a Local Path
// 	const response = await fetch(api_url);

// 	// Converting response into JSON
// 	const json = await response.json();

// 	// Console logging the response:
// 	console.log(json);
// 	let base64blob = json;
// 	document.getElementById('roasting-img').src = 'data:image/png;base64,' + base64blob;
// }

// async function getLot(lotID) {
// 	const lotid = lotID;
// 	// Local Path
// 	const api_url = `getlot/${lotid}`;

// 	// Get Fetch request to a Local Path
// 	const response = await fetch(api_url);

// 	// Converting response into JSON
// 	const json = await response.json();

// 	// Console logging the response:
// 	console.log(json);

// 	// Checking if Lot has images
// 	if (json.images[0]) {
// 		console.log('Lot has images');
// 		console.log(json.images[0].id);
// 		// console.log(json.customData['CuppersNotes.Measure'].dateTimeValue);
// 		getLotImage(json.images[0].id);
// 	} else {
// 		console.log('Lot has no images');
// 	}

// 	// DOM Manipulation
// 	document.getElementById('lot-cuppers-notes').innerHTML = `Cuppers Notes: ${json.customData['CuppersNotes.Measure']
// 		.value}`;
// 	document.getElementById('lot-roast-date').innerHTML = `Roast Date: ${json.customData['RoastDate.MeasureTime']
// 		.dateTimeValue}`;
// 	document.getElementById('lot-farmer-name').innerHTML = `Roaster: ${json.customData['FarmerName.Measure'].value}`;
// }

// async function getNode(nodeID) {
// 	const nodeid = nodeID;
// 	// Local Path
// 	const api_url = `getnode/${nodeid}`;

// 	// Get Fetch request to a Local Path
// 	const response = await fetch(api_url);

// 	// Converting response into JSON
// 	const json = await response.json();

// 	// Console logging the response:
// 	console.log(json);

// 	// Checking if Node has images
// 	if (json.images[0]) {
// 		console.log('Node has images');
// 		console.log(json.images[0].id);
// 		getNodeImage(json.images[0].id);
// 	} else {
// 		console.log('Node has no images');
// 	}

// 	// DOM Manipulation
// 	// document.getElementById('node-city').innerHTML = `City: ${json.defaultLocation.city}`;
// 	// document.getElementById('node-state').innerHTML = `State: ${json.defaultLocation.state}`;
// 	// document.getElementById('node-country').innerHTML = `Country: ${json.defaultLocation.country}`;
// }

// async function getLotHistory(lotID) {
// 	const lotid = lotID;
// 	// Local Path
// 	const api_url = `getlothistory/${lotid}`;

// 	// Get Fetch request to a Local Path
// 	const response = await fetch(api_url);

// 	// Converting response into JSON
// 	const json = await response.json();

// 	// Console logging the response:
// 	console.log(json);

// 	// Displaying data in the DOM:
// }

// Custom functions for each section
async function getLotHistory(lotID) {
	const lotid = lotID;
	// Local Path
	const api_url = `getlothistory/${lotid}`;

	// Get Fetch request to a Local Path
	const response = await fetch(api_url);

	// Converting response into JSON
	const json = await response.json();

	return json;
}

async function getNode(nodeID) {
	const nodeid = nodeID;
	// Local Path
	const api_url = `getnode/${nodeid}`;

	// Get Fetch request to a Local Path
	const response = await fetch(api_url);

	// Converting response into JSON
	const json = await response.json();

	return json;
}

async function getLot(lotID) {
	const lotid = lotID;
	// Local Path
	const api_url = `getlot/${lotid}`;

	// Get Fetch request to a Local Path
	const response = await fetch(api_url);

	// Converting response into JSON
	const json = await response.json();

	return json;
}

async function getLotVideo(videoID) {
	const videoid = videoID;
	// Local Path
	const api_url = `getlotvideo/${videoid}`;

	// Get Fetch request to a Local Path
	const response = await fetch(api_url);

	// Converting response into JSON
	const json = await response.json();

	let base64blob = json;

	// console.log(base64blob);

	return base64blob;
}

async function getLotImage(imageID) {
	const imageid = imageID;

	// Tesing
	// console.log(`This is the lot image ID = ${imageID}`);

	// Local Path
	const api_url = `getlotimage/${imageid}`;

	// Get Fetch request to a Local Path
	const response = await fetch(api_url);

	// Converting response into JSON
	const json = await response.json();

	let base64blob = json;

	return base64blob;
}

window.onload = function() {
	const url_string = window.location.href.toLowerCase();
	const url = new URL(url_string);
	const lotid = url.searchParams.get('lotid');

	// Testing the LotID
	// console.log(`Testing the lot id ${lotid}`);

	// Roasting *************************************************************** /
	//
	if (lotid) {
		// Roasting LotID from the URL
		getLot(lotid).then((res) => {
			document.getElementById('lot-cuppers-notes').innerHTML = ` ${res.customData['CuppersNotes.Measure'].value}`;
			document.getElementById('lot-roast-date').innerHTML = ` ${res.customData['RoastDate.MeasureTime']
				.dateTimeValue}`;
			document.getElementById('lot-farmer-name').innerHTML = ` ${res.customData['FarmerName.Measure'].value}</br>
			<img src="/images/powered-by-bext-white.png" alt="BEXT360-logo" class="BEXT360-logo-medium">`;

			// Roasting Location
			getNode('73427e9e-e29d-4b33-9a27-95244bdb0370').then((res) => {
				document.getElementById('roasted-at').innerHTML = ` ${res.defaultLocation.city}, ${res.defaultLocation.state}, ${res.defaultLocation.country}`;
			});

			// Section Roasting Column Image - Roasting
			getLotImage(res.images[0].id).then((lotImage) => {
				document.getElementById('roasting-img').src = 'data:image/jpg;base64,' + lotImage;
			});

			// Bext Marketplace link from the URL
			document.getElementById('bext-marketplace-link').href = `https://www.bextmarketplace.com/#/mapsv2/${lotid}?OwnerOrganizationId=f0c3cd58-2055-46e3-b229-1a091d1fb3fe`;
		});
	} else {
		// Default Roasting Lot Logic TO BE IMPLEMENTED
		document.getElementById('roasted-at').innerHTML = ` default City, default State, default Country`;
		document.getElementById('lot-cuppers-notes').innerHTML = ` default lot data`;
		document.getElementById('lot-roast-date').innerHTML = ` default lot data`;
		document.getElementById('lot-farmer-name').innerHTML = ` default lot data</br>
		<img src="/images/powered-by-bext-white.png" alt="BEXT360-logo" class="BEXT360-logo-medium">`;
		getLotImage('6b6f8ee4-fc20-425e-8a38-089e6258b5c1').then((lotImage) => {
			document.getElementById('roasting-img').src = 'data:image/jpg;base64,' + lotImage;
		});
		// Bext Marketplace link default
		document.getElementById('bext-marketplace-link').href = `https://www.bextmarketplace.com/#/mapsv2/a58fc3bf-94fd-4f0f-bd37-0947d8ba4146?OwnerOrganizationId=f0c3cd58-2055-46e3-b229-1a091d1fb3fe`;
	}

	// Roasting End  ****************************************************************** /

	// Journey Highlights ************************************************************* /
	// Section 3 Column 1 - QC Intake Green Node
	getNode('1dc41db1-f7b5-45f1-8810-432e6be023cb').then((QCIntakeGreen) => {
		document.getElementById('Node-QC-Intake-Green-defaultLocation-city-state-country').innerHTML = ` ${QCIntakeGreen
			.defaultLocation.city}, ${QCIntakeGreen.defaultLocation.state}, ${QCIntakeGreen.defaultLocation.country}`;
	});

	// Section 3 Column - 2020 Combined lot at QCCC roastery Date & Collector's Name
	getLot('a58fc3bf-94fd-4f0f-bd37-0947d8ba4146').then((CombinedLotAtQCCCRoastery2020) => {
		document.getElementById(
			'Lot-2020-Combined-lot-at-QCCC-roastery-date'
		).innerHTML = ` ${CombinedLotAtQCCCRoastery2020.customData['TransportDate.MeasureTime'].dateTimeValue}`;
		document.getElementById(
			'Lot-2020-Combined-lot-at-QCCC-roastery-CollectorName'
		).innerHTML = ` ${CombinedLotAtQCCCRoastery2020.customData['CollectorName.Measure'].value}
		</br>
		<img src="/images/powered-by-bext.png" alt="BEXT360-logo" class="BEXT360-logo-medium">`;
	});

	// Section 3 Column - Vido 2020 Combined lot at QCCC roastery Video
	getLotVideo('6d48b0b4-25d3-469e-9d60-a657724ca296').then((lotVideo) => {
		// console.log(lotVideo);
		document.getElementById('Lot-2020-Combined-lot-at-QCCC-roastery-video').src =
			'data:video/mp4;base64,' + lotVideo;
	});

	// Section 3 olumn - Port of Oakland Green Import Node
	getNode('b2d1d8b3-498b-424e-87df-3050aa237115').then((PortOfOaklandGreenImport) => {
		document.getElementById(
			'Node-Port-of-Oakland-Green-Import-city-state-country'
		).innerHTML = ` ${PortOfOaklandGreenImport.defaultLocation.city}, ${PortOfOaklandGreenImport.defaultLocation
			.state}, ${PortOfOaklandGreenImport.defaultLocation.country}`;
	});

	// Section 3 Column - Combined lot 2020 Import Date
	getLot('8f43a6a8-52aa-45d6-9bba-cbf8f823037d').then((CombinedLot2020) => {
		document.getElementById('Lot-Combined-lot-2020-import-date').innerHTML = ` ${CombinedLot2020.customData[
			'ImportDate.MeasureTime'
		].dateTimeValue}
		</br>
		<img src="/images/powered-by-bext.png" alt="BEXT360-logo" class="BEXT360-logo-medium">`;
	});

	// Section 3 Column - Combined Lot 2020 Image of the ship
	getLotImage('4aa16929-f043-4520-809d-d1f62cfb106d').then((lotImage) => {
		document.getElementById('Combined-lot-2020-image').src = 'data:image/jpg;base64,' + lotImage;
	});

	// Section 3 Column - Puerto Cortés Green Export Node
	getNode('c51f7616-5fb6-4416-be83-c98dc0d25df1').then((PuertoCortesGreenExport) => {
		document.getElementById(
			'Node-Puerto-Cortes-Green-Export-city-state-country'
		).innerHTML = ` ${PuertoCortesGreenExport.defaultLocation.city}, ${PuertoCortesGreenExport.defaultLocation
			.state}, ${PuertoCortesGreenExport.defaultLocation.country}`;
	});

	// Section 3 Column - Combined lot 2020 Export Date
	getLot('f1222ba7-0c10-4abf-b49f-c197be1ec8e1').then((CombinedLot2020) => {
		document.getElementById('Lot-Combined-lot-2020-export-date').innerHTML = ` ${CombinedLot2020.customData[
			'ExportDate.MeasureTime'
		].dateTimeValue}
		</br>
		<img src="/images/powered-by-bext.png" alt="BEXT360-logo" class="BEXT360-logo-medium">`;
	});
	// Section 3 Column - 2020 Combined lot at QCCC roastery Video
	getLotVideo('c8bf9e23-1ae9-4422-8e00-984566d5663a').then((lotVideo) => {
		// console.log(lotVideo);
		document.getElementById('loading-truck-video').src = 'data:video/mp4;base64,' + lotVideo;
	});

	// Journey Highlights End ******************************************************** /

	// Section 4 *************************************************************** /

	// Section 4 Column - Milling Location, Miller, and Current Lot Weight
	getLot('b0c1846f-8cef-410e-a2ec-f6d9f3843e9f').then((res) => {
		document.getElementById('milled-on').innerHTML = ` ${res.customData['MillingDate.MeasureTime'].dateTimeValue}`;
		document.getElementById('miller').innerHTML = ` ${res.customData['FarmerName.Measure'].value}`;
		document.getElementById('current-lot-weight').innerHTML = ` ${res.currentWeight} ${res.currentWeightUnit}</br>
		<img src="/images/powered-by-bext-white.png" alt="BEXT360-logo" class="BEXT360-logo-medium">`;
	});

	// Section 4 Column - Milling Location
	getNode('8a14226b-873b-4893-bedc-a9699dc28472').then((res) => {
		document.getElementById('milling-location').innerHTML = ` ${res.defaultLocation.city}, ${res.defaultLocation
			.state}, ${res.defaultLocation.country}`;
	});

	// Section 4 Column - Combined Lot Weight & Start and End Dates
	getLotHistory('a58fc3bf-94fd-4f0f-bd37-0947d8ba4146').then((lotHistory) => {
		Object.keys(lotHistory).forEach(async function(key) {
			if (lotHistory[key].nodeId === '01b66b57-c0a0-481c-abb0-57be005096da') {
				// Getting the lotIDs Array
				const lotIDs = lotHistory[key].lotIds;
				// Placeholder object
				const lotData = {};
				// Weights array
				const weights = [];
				// Dates array
				const intakeDates = [];
				for (i = 0; i < lotIDs.length; i++) {
					// API call and object assignment
					Object.assign(lotData, await getLot(lotIDs[i]));

					// Getting Current Weight in integer format
					weights[i] = parseInt(lotData.currentWeight);

					// Placing Transaction Date value into a string variable
					const str = lotData.customData['TransactionDate.MeasureTime'].dateTimeValue;

					// Slicing off first 10 characters
					const intakeDate = str.slice(0, 10);

					// Capturing Intake Date into the array
					intakeDates[i] = intakeDate;
				}

				// Getting the sum of weights
				const sumOfWeights = weights.reduce((accumulator, currentValue) => {
					return accumulator + currentValue;
				}, 0);

				// Sorting the Dates Array
				intakeDates.sort();

				// Testing
				// console.log(sumOfWeights, weights, intakeDates);

				// DOM Manipulations:
				document.getElementById(
					'total-intake-weight'
				).innerHTML = ` ${sumOfWeights} Lbs from ${weights.length} separate intakes`;
				document.getElementById('intake-dates').innerHTML = ` ${intakeDates[0]} and ${intakeDates[
					intakeDates.length - 1
				]}</br>
				<img src="/images/powered-by-bext-white.png" alt="BEXT360-logo" class="BEXT360-logo-medium">`;
			}
		});
	});

	// Section 4 Column - Milling Video
	getLotVideo('5b80c8dc-1dac-4eaf-8674-75052d83d0c5').then((lotVideo) => {
		document.getElementById('milling-video').src = 'data:video/mp4;base64,' + lotVideo;
	});

	// Section 4 Column - Hand Sorting Image
	getLotImage('14d5be6c-8f0e-48dd-88ca-46a1958a2fcf').then((lotImage) => {
		document.getElementById('hand-sorting-picture').src = 'data:image/jpg;base64,' + lotImage;
	});

	// Section 4 Column - Image -
	getLotImage('2d79f311-eb5f-4a4a-96b8-ec9adfca1617').then((lotImage) => {
		document.getElementById('133a7617-5ff0-437e-a5f8-e5ac1e9cc9ac').src = 'data:image/jpg;base64,' + lotImage;
	});
	// End of Section 4 ******************************************************** /

	// Section 5 *************************************************************** /
	// Section 5 Column 1 - Total Absorbed Weight, Total De-pulped Weight, and De-pluped dates
	getLotHistory('a58fc3bf-94fd-4f0f-bd37-0947d8ba4146').then((lotHistory) => {
		Object.keys(lotHistory).forEach(async function(key) {
			if (lotHistory[key].nodeId === '0270eada-dbb8-45dc-a38d-cffc166d87ea') {
				// Getting the lotIDs Array
				const lotIDs = lotHistory[key].lotIds;

				// Placeholder object
				const lotData = {};

				// Absorbed Weights array
				const absorbedWeights = [];

				// De-pupled Weights array
				const dePupledWeights = [];

				// De-pluped Dates array
				const dePupledDates = [];

				for (i = 0; i < lotIDs.length; i++) {
					// API call and object assignment
					Object.assign(lotData, await getLot(lotIDs[i]));

					// Getting Absorbed Weight in integer format
					absorbedWeights[i] = parseInt(lotData.absorbedWeight);

					// Getting De-Pupled Weight in integer format
					dePupledWeights[i] = parseInt(lotData.currentWeight);

					// Capturing De-Pupled Date into the array
					dePupledDates[i] = lotData.customData['De-PulpingDate.MeasureTime'].dateTimeValue;
				}

				// Getting the sum of Absorbed Weights
				const sumOfAbsorbedWeights = absorbedWeights.reduce((accumulator, currentValue) => {
					return accumulator + currentValue;
				}, 0);

				// Getting the sum of De-Pupled Weight Weights
				const sumOfDePupledWeights = dePupledWeights.reduce((accumulator, currentValue) => {
					return accumulator + currentValue;
				}, 0);

				// Sorting the De-Pupled Dates Array
				dePupledDates.sort();

				// Testing
				// console.log(sumOfAbsorbedWeights, sumOfDePupledWeights, dePupledDates);

				// DOM Manipulations:
				document.getElementById('total-absorbed-weight').innerHTML = ` ${sumOfAbsorbedWeights} Lbs`;
				document.getElementById('total-de-pulped-weight').innerHTML = ` ${sumOfDePupledWeights} Lbs`;
				document.getElementById(
					'de-pluped-between-dates'
				).innerHTML = ` ${dePupledDates[0]} and ${dePupledDates[dePupledDates.length - 1]}</br>
				<img src="/images/powered-by-bext.png" alt="BEXT360-logo" class="BEXT360-logo-medium">`;
			}
		});
	});

	// Section 5 Column 1 - Video - De-Pulping Cherry
	getLotVideo('44a78372-8b4e-4df7-880a-3292212403cf').then((lotVideo) => {
		// console.log(lotVideo);
		document.getElementById('De-Pulping-Cherry-video').src = 'data:video/mp4;base64,' + lotVideo;
	});

	// Section 5 Column 2 - IDEGWPHarvestCoffee - STATIC
	getLot('5c955a2e-90ef-6bf4-fa8a-1813ee5d4687').then((res) => {
		document.getElementById('picked-by').innerHTML = ` ${res.customData['FarmerName.Measure'].value}`;
		document.getElementById('picked-cherries-weight').innerHTML = ` ${res.customData['TotalValue.Measure']
			.value} Lbs`;
		document.getElementById('date-picked').innerHTML = ` ${res.customData['HarvestDate.MeasureTime']
			.dateTimeValue}`;
		document.getElementById('variety').innerHTML = ` ${res.customData['Varietal.Measure'].value} </br>
		<img src="/images/powered-by-bext.png" alt="BEXT360-logo" class="BEXT360-logo-medium">`;
		document.getElementById('farmer-picutre').src = res.customData['LotFarmerProductImage.Measure'].value;
	});

	// Section 5 Column 2 - IDEGWPHarvestCoffee - RANDOM
	// getLotHistory('a58fc3bf-94fd-4f0f-bd37-0947d8ba4146').then((lotHistory) => {
	// 	Object.keys(lotHistory).forEach(async function(key) {
	// 		if (lotHistory[key].nodeId === '6f93c9fc-6a58-41a7-9880-413b6ed87ecd') {
	// 			// Getting the lotIDs Array
	// 			const lotIDs = lotHistory[key].lotIds;

	// 			// Pulling Random lot into the Placeholder object
	// 			const lotData = await getLot(lotIDs[Math.floor(Math.random() * lotIDs.length + 1)]);

	// 			console.log(
	// 				`LotID: ${lotData.lotId}, Farmer Name: ${lotData.customData['FarmerName.Measure']
	// 					.value}, Total Value: ${lotData.customData['TotalValue.Measure'].value}, Harvest Date: ${lotData
	// 					.customData['HarvestDate.MeasureTime'].dateTimeValue}, Varietal: ${lotData.customData[
	// 					'Varietal.Measure'
	// 				].value}, Farmer Picture: ${lotData.customData['LotFarmerProductImage.Measure'].value}`
	// 			);

	// 			// DOM Manipulations:
	// 			document.getElementById('picked-by').innerHTML = `Picked by: ${lotData.customData['FarmerName.Measure']
	// 				.value}`;
	// 			document.getElementById('picked-cherries-weight').innerHTML = `Picked Cherries Weight: ${lotData
	// 				.customData['TotalValue.Measure'].value} Lbs`;
	// 			document.getElementById('date-picked').innerHTML = `Picked Cherries Weight: ${lotData.customData[
	// 				'HarvestDate.MeasureTime'
	// 			].dateTimeValue}`;
	// 			document.getElementById('variety').innerHTML = `Variety: ${lotData.customData['Varietal.Measure']
	// 				.value}`;
	// 			document.getElementById('farmer-picutre').src =
	// 				lotData.customData['LotFarmerProductImage.Measure'].value;
	// 		}
	// 	});
	// });
	// End of Section 5 ******************************************************** /
};

// (function($) {
// 	var $window = $(window),
// 		$body = $('body');

// 	// Breakpoints.
// 	breakpoints({
// 		xlarge: [ '1141px', '1680px' ],
// 		large: [ '981px', '1140px' ],
// 		medium: [ '737px', '980px' ],
// 		small: [ '481px', '736px' ],
// 		xsmall: [ '321px', '480px' ],
// 		xxsmall: [ null, '320px' ]
// 	});

// 	// Play initial animations on page load.
// 	$window.on('load', function() {
// 		window.setTimeout(function() {
// 			$body.removeClass('is-preload');
// 		}, 100);
// 	});

// 	// Scrolly.
// 	$('.scrolly').scrolly();
// })(jQuery);

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

// Not Used
// function getNodeName(nodeId) {
// 	const apiKey = '74ef3c49a75845ea9b02924702956447';
// 	fetch(`https://bext360api.azure-api.net/retail/v1/getnode/${nodeId}`, {
// 		method: 'GET',
// 		headers: {
// 			'Ocp-Apim-Subscription-Key': apiKey
// 		}
// 	})
// 		.then((result) => {
// 			return result.json();
// 		})
// 		.then((data) => {
// 			console.log(data);

// 			// Cheking if node has images
// 			if (data.images) {
// 				// Implement Loop Here:
// 				let imageID = data.images[0].id;
// 				console.log(`This is the image ID: ${imageID}`);

// 				// Get Image API Call
// 				fetch(`https://bext360api.azure-api.net/retail/v1/getimage/${imageID}`, {
// 					method: 'GET',
// 					headers: {
// 						'Ocp-Apim-Subscription-Key': apiKey
// 					}
// 				})
// 					.then((result2) => {
// 						return result2.json();
// 					})
// 					.then((data2) => {
// 						// Apply Image formatting here
// 						console.log(`This is an image ${data2}`);
// 					})
// 					.catch((error) => {
// 						console.log(error);
// 					});
// 			}
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// }
// getNodeName('6f93c9fc-6a58-41a7-9880-413b6ed87ecd');

// NodeID:
// 6f93c9fc-6a58-41a7-9880-413b6ed87ecd
// LotID:
// b672f566-bd19-4c81-ab40-8100d51d13a6

// Not Used
// document.getElementById('get-lot-id').onclick = function() {
// 	let lotID = document.getElementById('lot-id').value;

// 	if (lotID) {
// 		const apiKey = '74ef3c49a75845ea9b02924702956447';
// 		fetch(`https://bext360api.azure-api.net/retail/v1/getlot/${lotID}`, {
// 			method: 'GET',
// 			headers: {
// 				'Ocp-Apim-Subscription-Key': apiKey
// 			}
// 		})
// 			.then((result) => {
// 				// console.log(result);
// 				return result.json();
// 			})
// 			.then((data) => {
// 				console.log(data);
// 				const lotName = data.lotName;
// 				const productName = data.productName;
// 				const lotType = data.lotType;
// 				const createdDate = data.createdDate;
// 				const currentWeight = data.currentWeight;
// 				console.log(lotName, productName, lotType, createdDate, currentWeight);
// 				document.getElementById('lot-name').innerHTML = `<strong>Lot Name: </strong>${lotName}`;
// 				document.getElementById('product-name').innerHTML = `<strong>Product Name: </strong>${productName}`;
// 				document.getElementById('lot-type').innerHTML = `<strong>Lot Type: </strong>${lotType}`;
// 				document.getElementById('created-date').innerHTML = `<strong>Created Date: </strong>${currentWeight}`;
// 				document.getElementById(
// 					'current-weight'
// 				).innerHTML = `<strong>Current Weight: </strong>${currentWeight}`;
// 			})
// 			.catch((error) => {
// 				alert('Please enter a valid lot ID');
// 			});
// 	} else {
// 		alert('Please enter a valid lot ID');
// 	}
// };

// Not Used
// window.onload = function() {
// 	let url_string = window.location.href.toLowerCase();
// 	let url = new URL(url_string);
// 	let nodeid = url.searchParams.get('nodeid');
// 	console.log(`Node id = ${nodeid}`);
// 	if (nodeid) {
// 		const apiKey = '74ef3c49a75845ea9b02924702956447';
// 		fetch(`https://bext360api.azure-api.net/retail/v1/getnode/${nodeid}`, {
// 			method: 'GET',
// 			headers: {
// 				'Ocp-Apim-Subscription-Key': apiKey
// 			}
// 		})
// 			.then((result) => {
// 				// console.log(result);
// 				return result.json();
// 			})
// 			.then((data) => {
// 				console.log(data);
// 				const nodeID = data.nodeId;
// 				const nodeName = data.nodeName;
// 				const nodeCity = data.defaultLocation.city;

// 				document.getElementById('node-id').innerHTML = `Node ID - ${nodeID}`;
// 				document.getElementById('node-name').innerHTML = `Node Name - ${nodeName}`;
// 				document.getElementById('node-city').innerHTML = `Node City - ${nodeCity}`;

// 				// Image Part Start:

// 				if (data.images[0]) {
// 					// Implement Loop Here:
// 					let imageID = data.images[0].id;
// 					console.log(`This is the image ID: ${imageID}`);

// 					// Get Image API Call
// 					fetch(`https://bext360api.azure-api.net/retail/v1/getimage/${imageID}`, {
// 						method: 'GET',
// 						headers: {
// 							'Ocp-Apim-Subscription-Key': apiKey
// 						}
// 					})
// 						.then((response) => {
// 							// return response.blob();
// 							return response.json();
// 						})
// 						.then((myBlob) => {
// 							// Apply Image formatting here
// 							let base64blob = myBlob;
// 							document.getElementById('myImage').src = 'data:image/png;base64,' + base64blob;
// 						})
// 						.catch((error) => {
// 							console.log(error);
// 						});
// 				}

// 				// Image Part End

// 				// Video Part Start
// 				if (data.videos[0]) {
// 					// Implement Loop Here:
// 					console.log(data.videos[0].id);
// 					let videoID = data.videos[0].id;
// 					console.log(`This is the video ID: ${videoID}`);

// 					// Get Video API Call
// 					fetch(`https://bext360api.azure-api.net/retail/v1/getvideo/${videoID}`, {
// 						method: 'GET',
// 						headers: {
// 							'Ocp-Apim-Subscription-Key': apiKey
// 						}
// 					})
// 						.then((response) => {
// 							// return response.blob();
// 							return response.json();
// 						})
// 						.then((myBlob) => {
// 							// Apply Image formatting here
// 							let base64blob = myBlob;
// 							document.getElementById('myVideo').src = 'data:video/mp4;base64,' + base64blob;
// 						})
// 						.catch((error) => {
// 							console.log(error);
// 						});
// 				}
// 				// Video Part End
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	} else {
// 	}
// };
