// Google Analytics Event Tracking
// Navbar ************************
// BCB logo / Home
document.getElementById("BCB-logo").addEventListener("click", function(){
	ga('send', 'event', 'Navbar', 'click', 'Home-Top');
});
// Farming
document.getElementById("link-farming").addEventListener("click", function(){
	ga('send', 'event', 'Navbar', 'click', 'Farming');
});
// Processing & Export
document.getElementById("link-processing-and-export").addEventListener("click", function(){
	ga('send', 'event', 'Navbar', 'click', 'Processing-and-Export');
});
// Journey Highlights
document.getElementById("link-journey-highlights").addEventListener("click", function(){
	ga('send', 'event', 'Navbar', 'click', 'Journey-Highlights');
});
// Roasting
document.getElementById("link-roasting").addEventListener("click", function(){
	ga('send', 'event', 'Navbar', 'click', 'Roasting');
});
// Feedback
document.getElementById("link-feedback").addEventListener("click", function(){
	ga('send', 'event', 'Navbar', 'click', 'Feedback');
});
// About
document.getElementById("link-about").addEventListener("click", function(){
	ga('send', 'event', 'Navbar', 'click', 'About');
});
// Sponsors
document.getElementById("link-sponsors").addEventListener("click", function(){
	ga('send', 'event', 'Navbar', 'click', 'Sponsors');
});
// Navbar End ********************
// BEXT Marketplace
document.getElementById("bext-marketplace-link").addEventListener("click", function(){
	ga('send', 'event', 'Link', 'click', 'Bext-Marketplace');
});
// Catracha
document.getElementById("catracha-logo-link").addEventListener("click", function(){
	ga('send', 'event', 'Link', 'click', 'Catracha-Logo');
});
document.getElementById("catracha-button").addEventListener("click", function(){
	ga('send', 'event', 'Link', 'click', 'Catracha-Button');
});
// Buy This Coffee button
document.getElementById("buy-this-coffee").addEventListener("click", function(){
	ga('send', 'event', 'Link', 'click', 'BuyThisCoffee');
});
// BEXT Homepage
document.getElementById("bext-homepage-link").addEventListener("click", function(){
	ga('send', 'event', 'Link', 'click', 'Bext-Homepage');
});
// iDE Homepage
document.getElementById("ide-homepage-link").addEventListener("click", function(){
	ga('send', 'event', 'Link', 'click', 'iDE-Homepage');
});
// Arrow Homepage
document.getElementById("arrow-homepage-link").addEventListener("click", function(){
	ga('send', 'event', 'Link', 'click', 'Arrow-Homepage');
});
// Posner Homepage
document.getElementById("posner-homepage-link").addEventListener("click", function(){
	ga('send', 'event', 'Link', 'click', 'Posner-Homepage');
});
// Social Media Sharing **********
// Facebook
document.getElementById("link-twitter").addEventListener("click", function(){
	ga('send', 'event', 'SocialMediaSharing', 'click', 'Twitter');
});
// Twitter
document.getElementById("link-facebook").addEventListener("click", function(){
	ga('send', 'event', 'SocialMediaSharing', 'click', 'Facebook');
});
// Social Media Sharing End ******

// Navbar Script
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('activated');
	toggleButton.classList.toggle('change');
});

// Social Media Share Links: 
/* Taken from:
https://crunchify.com/list-of-all-social-sharing-urls-for-handy-reference-social-media-sharing-buttons-without-javascript/

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]
*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

function initSocialMediaLinks() {
	let postUrl = encodeURI(document.location.href);
	let postTitle = encodeURI("Hey everyone, please check out this Blockchain Coffee Beans website: ");

	facebookBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postUrl}`);
	twitterBtn.setAttribute("href", `https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
}

initSocialMediaLinks();

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

// API functions
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

async function getVideo(videoID) {
	const videoid = videoID;
	// Local Path
	const api_url = `getvideo/${videoid}`;

	// Get Fetch request to a Local Path
	const response = await fetch(api_url);

	// Converting response into JSON
	const json = await response.json();

	let base64blob = json;

	// console.log(base64blob);

	return base64blob;
}

async function getImage(imageID) {
	const imageid = imageID;

	// Tesing
	// console.log(`This is the lot image ID = ${imageID}`);

	// Local Path
	const api_url = `getimage/${imageid}`;

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
	let lotid = url.searchParams.get('lotid');

	let variable;
	// Testing the LotID
	// console.log(`Testing the lot id ${lotid}`);

	// Roasting Section *************************************************************** /
	// If there is a lotid in the URL, do nothing. Otherwise, use the default value.
	if(lotid) {
		// Header Appendix Paragarph with a valid lotID
		// document.getElementById('header-appendix-paragraph').innerHTML = `The lotID is in the URL: ${lotid}`;
	} else {
		// Default Roast LotID
		lotid = '3551603f-d59d-4651-bcb8-f73bf7faeaa1';

		// Paragraph
		document.getElementById('header-appendix-paragraph').innerHTML = `<div class="container"><p>Hello, this page is more exciting when displaying information on a particular batch, so we have picked a default one for you!</p></div>`;
	}

	getLot(lotid).then((res) => {
		// Bext Marketplace link from the URL
		document.getElementById('bext-marketplace-link').href = `https://www.bextmarketplace.com/#/mapsv2/${lotid}?OwnerOrganizationId=f0c3cd58-2055-46e3-b229-1a091d1fb3fe`;

		// Roasted at 
		getNode('73427e9e-e29d-4b33-9a27-95244bdb0370').then((res) => {
			document.getElementById('roasted-at').innerHTML = ` ${res.defaultLocation.city}, ${res.defaultLocation.state}, ${res.defaultLocation.country}`;
		});

		// Cuppers Notes, Roast Date, and Roaster
		document.getElementById('lot-cuppers-notes').innerHTML = ` ${res.customData['CuppersNotes.Measure'].value}`;
		document.getElementById('lot-roast-date').innerHTML = ` ${res.customData['RoastDate.MeasureTime']
			.dateTimeValue}`;
		document.getElementById('lot-farmer-name').innerHTML = ` ${res.customData['FarmerName.Measure'].value}`;

		// Roasting Section Image
		// Check if the lot has images
		if(res.images[0]) {
			getImage(res.images[res.images.length - 1].id).then((lotImage) => {
				// Testing image size
				// console.log(lotImage);

				const source = 'data:video/mp4;base64,' + lotImage;
				// document.getElementById('roasting-img').src = 'data:image/jpg;base64,' + lotImage;
				document.getElementById('roasting-image-container').innerHTML = `<span class="image fit"><img src="${source}" alt="image of coffee roasting"/></span>`;
			});
		} else {
			document.getElementById('roasting-image-container').innerHTML = ``;
		}

		// Roasting Section Video
		// Checking if the lot has videos
		if(res.videos[0]) {
			getVideo(res.videos[res.videos.length - 1].id).then((lotVideo) => {
				// Testing video size
				// console.log(lotVideo);

				const source = 'data:video/mp4;base64,' + lotVideo;
				// document.getElementById('roasting-video').src = 'data:video/mp4;base64,' + lotVideo;
				document.getElementById('roasting-video-container').innerHTML = `<span class="image fit"><video class="image fit" controls src="${source}" onplay="ga('send', 'event', 'Videos', 'play', 'Roasting');"></video></span>`;
			});
		} else {
			document.getElementById('roasting-video-container').innerHTML = ``;
		}
	
	// Error Handling
	}).catch(err => {
		// Testing the error message
		// console.log(err);

		// Setting the 
		lotid = '3551603f-d59d-4651-bcb8-f73bf7faeaa1';

		getLot(lotid).then((res) => {
			// Bext Marketplace link from the URL
			document.getElementById('bext-marketplace-link').href = `https://www.bextmarketplace.com/#/mapsv2/${lotid}?OwnerOrganizationId=f0c3cd58-2055-46e3-b229-1a091d1fb3fe`;
	
			// Cuppers Notes, Roast Date, and Roaster
			document.getElementById('lot-cuppers-notes').innerHTML = ` ${res.customData['CuppersNotes.Measure'].value}`;
			document.getElementById('lot-roast-date').innerHTML = ` ${res.customData['RoastDate.MeasureTime']
				.dateTimeValue}`;
			document.getElementById('lot-farmer-name').innerHTML = ` ${res.customData['FarmerName.Measure'].value}`;
	
			// Roasting Section Image
			// Check if the lot has images
			if(res.images[0]) {
				getImage(res.images[res.images.length - 1].id).then((lotImage) => {
					// Testing the image size
					// console.log(lotImage);
					document.getElementById('roasting-img').src = 'data:image/jpg;base64,' + lotImage;
				});
			}
	
			// Roasting Section Video
			// Checking if the lot has videos
			if(res.videos[0]) {
				getVideo(res.videos[res.videos.length - 1].id).then((lotVideo) => {
					// Testing the video size
					// console.log(lotVideo);
					document.getElementById('roasting-video').src = 'data:video/mp4;base64,' + lotVideo;
				});
			}
		
		// Error Handling
		});

		// Cuppers Notes, Roast Date, and Roaster
		document.getElementById('lot-cuppers-notes').innerHTML = ` Invalid Lot ID`;
		document.getElementById('lot-roast-date').innerHTML = `  Invalid Lot ID`;
		document.getElementById('lot-farmer-name').innerHTML = `  Invalid Lot ID`;

		// Header Appendix Paragraph
		document.getElementById('header-appendix-paragraph').innerHTML = `<div class="container"><p>Hello, the lotID entered does not match any in our database, so we have picked a default one for you! If you think this is an error, pls contact us! (link to an email)</p></div>`;
	});
	// Roasting Section End  ****************************************************************** /

	// Journey Highlights Section ************************************************************* /
	// Column - QC Intake Green, 'Roaster Received in'
	getNode('1dc41db1-f7b5-45f1-8810-432e6be023cb').then((QCIntakeGreen) => {
		document.getElementById('qc-intake-green-location').innerHTML = ` ${QCIntakeGreen
			.defaultLocation.city}, ${QCIntakeGreen.defaultLocation.state}, ${QCIntakeGreen.defaultLocation.country}`;
	});

	// Column - QC Intake Green, 'Date', 'Weight', and 'Received by'
	getLot('a58fc3bf-94fd-4f0f-bd37-0947d8ba4146').then((CombinedLotAtQCCCRoastery2020) => {
		// 'Date'
		document.getElementById(
			'qc-intake-green-date'
		).innerHTML = ` ${CombinedLotAtQCCCRoastery2020.customData['TransportDate.MeasureTime'].dateTimeValue}`;

		// 'Weight
		document.getElementById(
			'qc-intake-green-weight'
		).innerHTML = ` ${CombinedLotAtQCCCRoastery2020.currentWeight} Lbs`;

		// 'Received by'
		document.getElementById(
			'qc-intake-green-collector'
		).innerHTML = ` ${CombinedLotAtQCCCRoastery2020.customData['CollectorName.Measure'].value}`;
	});

	// Column - QC Intake Green, Video
	getVideo('6d48b0b4-25d3-469e-9d60-a657724ca296').then((lotVideo) => {
		// Testing video size
		// console.log(lotVideo);

		const source = 'data:video/mp4;base64,' + lotVideo;
		// document.getElementById('qc-intake-green-video').src = 'data:video/mp4;base64,' + lotVideo;
		document.getElementById('qc-intake-green-video-container').innerHTML = `<span class="image fit"><video src="${source}" class="image fit" controls onplay="ga('send', 'event', 'Videos', 'play', 'QCIntakeGreen');"></video></span>`;
	});

	// Column - Port of Oakland Green Import, 'Imported At'
	getNode('b2d1d8b3-498b-424e-87df-3050aa237115').then((PortOfOaklandGreenImport) => {
		document.getElementById(
			'green-import-location'
		).innerHTML = ` ${PortOfOaklandGreenImport.defaultLocation.city}, ${PortOfOaklandGreenImport.defaultLocation
			.state}, ${PortOfOaklandGreenImport.defaultLocation.country}`;
	});

	// Column - Port of Oakland Green Import, 'Date'
	getLot('8f43a6a8-52aa-45d6-9bba-cbf8f823037d').then((CombinedLot2020) => {
		document.getElementById('green-import-date').innerHTML = ` ${CombinedLot2020.customData[
			'ImportDate.MeasureTime'
		].dateTimeValue}`;
	});

	// Column - Port of Oakland Green Import, Image
	getImage('4aa16929-f043-4520-809d-d1f62cfb106d').then((lotImage) => {

		const source = 'data:image/jpg;base64,' + lotImage;

		document.getElementById('green-import-image-container').innerHTML = `<span class="image fit"><img src="${source}" alt="Picture of the ship"/></span>`;

	});

	// Column - Puerto Cortés Green Export, 'Exported From'
	getNode('c51f7616-5fb6-4416-be83-c98dc0d25df1').then((PuertoCortesGreenExport) => {
		document.getElementById(
			'green-export-location'
		).innerHTML = ` ${PuertoCortesGreenExport.defaultLocation.city}, ${PuertoCortesGreenExport.defaultLocation
			.state}, ${PuertoCortesGreenExport.defaultLocation.country}`;
	});

	// Column - Puerto Cortés Green Export, 'Date' and Weight
	getLot('f1222ba7-0c10-4abf-b49f-c197be1ec8e1').then((CombinedLot2020) => {
		document.getElementById('green-export-date').innerHTML = ` ${CombinedLot2020.customData[
			'ExportDate.MeasureTime'
		].dateTimeValue}`;

		document.getElementById('green-export-weight').innerHTML = ` ${CombinedLot2020.absorbedWeight} Lbs`;
	});

	// Column - Puerto Cortés Green Export, Video
	getVideo('c8bf9e23-1ae9-4422-8e00-984566d5663a').then((lotVideo) => {
		// Testing video size
		// console.log(lotVideo);
		const source = 'data:video/mp4;base64,' + lotVideo;
		// document.getElementById('green-export-video').src = 'data:video/mp4;base64,' + lotVideo;
		document.getElementById('green-export-video-container').innerHTML = `<span class="image fit"><video src="${source}" class="image fit" controls onplay="ga('send', 'event', 'Videos', 'play', 'ExportGreen');"></video></span>`;
	});
	// Journey Highlights Section End ******************************************************** /

	// Processed and Exported by Catracha Coffee Section ************************************* /
	// Column - Catracha Intake Parchment, 'Total Intake Weight' and 'Intake Dates between'
	// lotid 'a58fc3bf-94fd-4f0f-bd37-0947d8ba4146'
	getLotHistory(lotid).then((lotHistory) => {
		// Testing the lotid
		// console.log(lotid);

		Object.keys(lotHistory).forEach(async function(key) {
			// First Node
			if (lotHistory[key].nodeId === '01b66b57-c0a0-481c-abb0-57be005096da') {
				// Getting the lotIDs Array
				const lotIDs = lotHistory[key].lotIds;

				// Testing the lotIDs
				// console.log(`First node: ${lotIDs}`);

				// Placeholder object
				const lotData = {};

				// Weights array
				const weights = [];

				// Money array
				const payments = [];

				// Dates array
				const intakeDates = [];

				for (let i = 0; i < lotIDs.length; i++) {
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

					// Capturing TotalValue.Measure into the array
					payments[i] = parseInt(lotData.customData["TotalValue.Measure"].value);
				}

				// Getting the sum of weights
				const sumOfWeights = weights.reduce((accumulator, currentValue) => {
					return accumulator + currentValue;
				}, 0);

				// Getting the sum of payments
				const sumOfPayments = payments.reduce((accumulator, currentValue) => {
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
				]}`;
				// Converting the sumOfPayments into USD by dividing it by 24.5
				document.getElementById('payments-total').innerHTML = ` ${(sumOfPayments / 24.5).toFixed(2)} USD`;
			
				// Economics Section - Paid for Parchment
				document.getElementById('paid-for-parchment').innerHTML = ` $${(sumOfPayments / 24.5).toFixed(2)}`;
			} 

			// Grown, Picked, and Processed by Claudia & Juan Section ********************************* /
			// Column - Farmer De-Pulping, 'Total Absorbed Weight', 'Total De-pulped Weight', and 'De-pluped between'
			if (lotHistory[key].nodeId === '0270eada-dbb8-45dc-a38d-cffc166d87ea') {
					// Getting the lotIDs Array
					const lotIDs2 = lotHistory[key].lotIds;

					// Testing the lotIDs
					// console.log(`Second node: ${lotIDs2}`);
	
					// Placeholder object
					const lotData2 = {};
	
					// Absorbed Weights array
					const absorbedWeights = [];
	
					// De-pupled Weights array
					const dePupledWeights = [];
	
					// De-pluped Dates array
					const dePupledDates = [];
	
					for (let j = 0; j < lotIDs2.length; j++) {
						// API call and object assignment
						Object.assign(lotData2, await getLot(lotIDs2[j]));
	
						// Getting Absorbed Weight in integer format
						absorbedWeights[j] = parseInt(lotData2.absorbedWeight);
	
						// Getting De-Pupled Weight in integer format
						dePupledWeights[j] = parseInt(lotData2.currentWeight);
	
						// Capturing De-Pupled Date into the array
						dePupledDates[j] = lotData2.customData['De-PulpingDate.MeasureTime'].dateTimeValue;
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
					).innerHTML = ` ${dePupledDates[0]} and ${dePupledDates[dePupledDates.length - 1]}`;
				}
		});

	});
	
	// Column - Catracha Intake Parchment, Image
	getImage('2d79f311-eb5f-4a4a-96b8-ec9adfca1617').then((lotImage) => {
		const source = 'data:image/jpg;base64,' + lotImage;

		document.getElementById('catracha-intake-parchment-image-container').innerHTML = `<span class="image fit"><img src="${source}" alt="Catracha Intake Parchment Image"/></span>`;
	});

	// Column - Milling, 'Milled on', 'Miller', and 'Lot Current Weight'
	getLot('b0c1846f-8cef-410e-a2ec-f6d9f3843e9f').then((res) => {
		document.getElementById('milled-on').innerHTML = ` ${res.customData['MillingDate.MeasureTime'].dateTimeValue}`;
		document.getElementById('miller').innerHTML = ` ${res.customData['FarmerName.Measure'].value}`;
		document.getElementById('current-lot-weight').innerHTML = ` ${res.currentWeight} Lbs`;
	});

	// Column - Milling, 'Location'
	getNode('8a14226b-873b-4893-bedc-a9699dc28472').then((res) => {
		document.getElementById('milling-location').innerHTML = ` ${res.defaultLocation.city}, ${res.defaultLocation
			.state}, ${res.defaultLocation.country}`;
	});

	// Column - Milling, Video
	getVideo('5b80c8dc-1dac-4eaf-8674-75052d83d0c5').then((lotVideo) => {
		const source = 'data:video/mp4;base64,' + lotVideo;
		// document.getElementById('milling-video').src = 'data:video/mp4;base64,' + lotVideo;
		document.getElementById('milling-video-container').innerHTML = `<span class="image fit"><video src="${source}" class="image fit" controls onplay="ga('send', 'event', 'Videos', 'play', 'Milling');"></video></span>`;
	});

	// Column - Milling, Image
	getImage('14d5be6c-8f0e-48dd-88ca-46a1958a2fcf').then((lotImage) => {
		const source = 'data:image/jpg;base64,' + lotImage;
		// document.getElementById('milling-image').src = 'data:image/jpg;base64,' + lotImage;
		document.getElementById('milling-image-container').innerHTML = `<span class="image fit"><img src="${source}" alt="Handsorting Picture"/></span>`;
	});
	// Processed and Exported by Catracha Coffee Section End ********************************* /

	// Grown, Picked, and Processed by Claudia & Juan Section ********************************* /
	// Column - Farmer De-Pulping, Video
	getVideo('df5e4e96-5133-4c85-ad5f-032d65182723').then((lotVideo) => {
		// console.log(lotVideo);
		const source = 'data:video/mp4;base64,' + lotVideo;

		// Testing
		// console.log(lotVideo.type)

		document.getElementById('de-pulping-video-container').innerHTML = `<span class="image fit"><video src="${source}" class="image fit" controls onplay="ga('send', 'event', 'Videos', 'play', 'DePulping');"></video></span>`;

	});

	// Column - Farmer Harvest (STATIC), 'Picked by', 'Picked Cherries Weight', 'Date picked', 'Variety' and Image
	getLot('5c955a2e-90ef-6bf4-fa8a-1813ee5d4687').then((res) => {
		// Picked by
		document.getElementById('picked-by').innerHTML = ` ${res.customData['FarmerName.Measure'].value}`;

		// Picked Cherries Weight
		document.getElementById('picked-cherries-weight').innerHTML = ` ${res.customData['TotalValue.Measure']
			.value} Lbs`;

		// Date picked
		document.getElementById('date-picked').innerHTML = ` ${res.customData['HarvestDate.MeasureTime']
			.dateTimeValue}`;

		// Variety
		document.getElementById('variety').innerHTML = ` ${res.customData['Varietal.Measure'].value}`;

		// Image if exists
		if(res.customData['LotFarmerProductImage.Measure']) {
			const source = res.customData['LotFarmerProductImage.Measure'].value;
			document.getElementById('farmer-picutre-container').innerHTML = `<span class="image fit"><img src="${source}" id="farmer-picutre" alt="farmer-picture"/></span>`;
		} else {
			document.getElementById('farmer-picutre-container').innerHTML = ``;
		}
	});

	// Column - Farmer Harvest (RANDOM), 'Picked by', 'Picked Cherries Weight', 'Date picked', 'Variety' and Image
	// getLotHistory('a58fc3bf-94fd-4f0f-bd37-0947d8ba4146').then((lotHistory) => {
	// 	Object.keys(lotHistory).forEach(async function(key) {
	// 		if (lotHistory[key].nodeId === '6f93c9fc-6a58-41a7-9880-413b6ed87ecd') {
	// 			// Getting the lotIDs Array
	// 			const lotIDs = lotHistory[key].lotIds;

	// 			// Testing
	// 			console.log(lotIDs);

	// 			// Random ID
	// 			const randomId = lotIDs[Math.floor(Math.random() * lotIDs.length + 1)];

	// 			// Pulling Random lot into the Placeholder object
	// 			const lotData = await getLot(randomId);

	// 			console.log(
	// 				`LotID: ${lotData.lotId}, Farmer Name: ${lotData.customData['FarmerName.Measure']
	// 					.value}, Total Value: ${lotData.customData['TotalValue.Measure'].value}, Harvest Date: ${lotData
	// 					.customData['HarvestDate.MeasureTime'].dateTimeValue}, Varietal: ${lotData.customData[
	// 					'Varietal.Measure'
	// 				].value}, Farmer Picture: ${lotData.customData['LotFarmerProductImage.Measure'].value}`
	// 			);

	// 			// DOM Manipulations:
	// 			document.getElementById('picked-by').innerHTML = ` ${lotData.customData['FarmerName.Measure']
	// 				.value}`;
	// 			document.getElementById('picked-cherries-weight').innerHTML = ` ${lotData
	// 				.customData['TotalValue.Measure'].value} Lbs`;
	// 			document.getElementById('date-picked').innerHTML = ` ${lotData.customData[
	// 				'HarvestDate.MeasureTime'
	// 			].dateTimeValue}`;
	// 			document.getElementById('variety').innerHTML = ` ${lotData.customData['Varietal.Measure']
	// 				.value}`;

	// 			// Image
	// 			if(lotData.customData['LotFarmerProductImage.Measure'].value) {
	// 				const source = lotData.customData['LotFarmerProductImage.Measure'].value;
	// 				document.getElementById('farmer-picutre-container').innerHTML = `<span class="image fit"><img src="${source}" alt="farmer-picture"/></span>`;
	// 			} else {
	// 				document.getElementById('farmer-picutre-container').innerHTML = ``;
	// 			}
	// 		}
	// 	});
	// });
	// Grown, Picked, and Processed by Claudia & Juan Section End ***************************** /

	// Economics Section
	// Column -
	getLot('f1222ba7-0c10-4abf-b49f-c197be1ec8e1').then((res) => {
		// Picked by
		document.getElementById('profit-share').innerHTML = ` $${(res.customData['ProfitSharePaymentTotal.Measure'].value / res.customData['ProfitShareExchangeRate.Measure'].value).toFixed(2)}`;
	});
	// Total Payment = Paid for Parchment + Profit Share
	// document.getElementById('profit-share').innerHTML = ` `;
	// Economics Section End
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
