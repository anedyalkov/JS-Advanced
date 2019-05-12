function initializeTable() {
    
    $('#createLink').click(createCountries);

    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia", "Moscow");

    hideButtons();

    function addCountryToTable(country, capital){
        let tr = $('<tr>');
        tr.append(`<td>${country}</td>`)
            .append(`<td>${capital}</td>`)
            .append($('<td>')
              .append($("<a href='#'>[Up]</a>").on('click', moveRowUp))
              .append($("<a href='#'>[Down]</a>").on('click', moveRowDown))
              .append($("<a href='#'>[Delete]</a>").on('click', deleteRow)));
        $('#countriesTable').append(tr);
    }

    function createCountries(){
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        if(country !== '' && capital !== ''){
            addCountryToTable(country, capital);
        }
       
    }

    function moveRowUp(){
        let currentRow = $(this).parent().parent();
        currentRow.insertBefore(currentRow.prev());
        hideButtons();      
    }
    function moveRowDown() {
        let currentRow = $(this).parent().parent();
        currentRow.insertAfter(currentRow.next());
        hideButtons(); 
    }
    function deleteRow() {
        let currentRow = $(this).parent().parent();
        currentRow.remove();
        hideButtons(); 
    }

    function hideButtons(){
        $('tr a').show();
        $('#countriesTable tr:nth-child(3) td:nth-child(3) a:first-child').hide();
        $('#countriesTable tr:last-child td:nth-child(3) a:nth-child(2)').hide();
    }
}