function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let productElement = $(".custom-select")
        .on("input", productChange);
    let priceElement = $("#price");
    let quantityElement = $("#quantity");
    let btn = $('#submit').click(submit);
    let totalPrice = 0;
    let totalQuantity = 0;

    function productChange() {
        if (productElement.val() !== "") {
            btn.attr("disabled", false);
        } else {
            btn.attr("disabled", true);
        }
    }
    let count = 0;

    function submit() {
        let product = productElement.val();
        let price = +priceElement.val();
        let quantity = +quantityElement.val();

        createList(product, price, quantity);
        productElement.val('');
        priceElement.val(1);
        quantityElement.val(1);
        btn.attr("disabled", true);
        totalPrice += price;
        totalQuantity += quantity;
        $("#capacity").val(totalQuantity);
        $("#sum").val(totalPrice)
        
        checkCapacity();

    }
    function createList(product, price, quantity) {
        let li = $(`<li>Product: ${product} Price: ${price} Quantity: ${quantity}</li>`);
        $('.display').append(li);
    }

    function checkCapacity() {
        if (totalQuantity >= 150){
        $('#capacity').val('full');
        $('#capacity').addClass('fullCapacity');
        productElement.attr("disabled", true);
        priceElement.attr("disabled", true);
        quantityElement.attr("disabled", true);
        btn.attr("disabled", true);
        }
    }
}