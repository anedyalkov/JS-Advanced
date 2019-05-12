function addDestination(){
    let inputFields = $('.inputData');
    let city = $(inputFields[0]);
    let country = $(inputFields[1]);
    let season = $("#seasons option:selected").text();
    if(city.val() && country.val()){
        let tbody = $('#destinationsList');
        let tr = $(`<tr><td>${city.val()}, ${country.val()}</td><td>${season}</td></tr>`);
        tbody.append(tr);      
        let summaryBox = $(`#summaryBox #${season.toLowerCase()}`);
        summaryBox.val(+summaryBox.val() + 1)
    }
    city.val('');
    country.val('');
}