// function addItem() {
//     let text = document.getElementById('newItemText').value;
//     let value = document.getElementById("newItemValue").value;
//     let option = document.createElement('option');
//     option.text = text;
//     option.value = value;
//     let menu = document.getElementById('menu');
//     menu.appendChild(option);
//     document.getElementById("newItemText").value = '';
//     document.getElementById("newItemValue").value = '';

// }

function addItem() {
    let text = $('#newItemText').val();
    let value = $('#newItemValue').val();
    let menu = $('#menu');
    menu.append($("<option></option>")
        .attr("value", value)
        .text(text));
    $('#newItemText').val('');
    $('#newItemValue').val('');

}