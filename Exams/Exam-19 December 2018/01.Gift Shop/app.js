function solution() {
	let toyType = $('#toyType');
	let toyPrice = $('#toyPrice');
	let toyDescription = $('#toyDescription');
	let addBtn = $('button')[0];

	$(addBtn).click(function () {
		if (toyType.val() && $.isNumeric(toyPrice.val()) && toyDescription.val()) {
			let section = $('#christmasGiftShop');
			let div = $('<div class = "gift"></div>');

			let img = $('<img>'); //Equivalent: $(document.createElement('img'))
			img.attr('src', 'gift.png');
			let h2 = $(`<h2>${toyType.val()}</h2>`)
			let p = $(`<p>${toyDescription.val()}</p>`);
			let btn = $(`<button>Buy it for $${toyPrice.val()}</button>`).click(function () {
				div.remove();
			});
			div.append(img).append(h2).append(p).append(btn);
			div.appendTo(section);
		}
		toyType.val('');
		toyPrice.val('');
		toyDescription.val('');
	});
}



