function acceptance() {
	// let inputFields = $('#fields td input');
	
	let company = $('input[name = "shippingCompany"]');
	console.log(company.val());
	let product = $('input[name = "productName"]');
	let quantity = $('input[name = "productQuantity"]');
	let scrape = $('input[name = "productScrape"]');

	let mainDiv = $('#warehouse');


	if (company.val() && product.val() && $.isNumeric(quantity.val()) && $.isNumeric(scrape.val())){
		let div = $('<div>');
		let p = $('<p>');
		let availableQuantity = +quantity.val() - +scrape.val()
		if(availableQuantity > 0){
			p.text(`[${company.val()}] ${product.val()} - ${availableQuantity} pieces`)
			let btn = $(`<button type = "button">Out of stock</button>`).click(function () {
				div.remove();
			});

			div.append(p).append(btn);
			mainDiv.append(div);
		}		
	}

	company.val('');
	product.val('');
	quantity.val('');
	scrape.val('');
}