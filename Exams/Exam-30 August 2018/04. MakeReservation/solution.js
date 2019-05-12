function makeReservation(input){
    let container = $(input);
    let submitBtn = $('#submit');

    let fullName = '';
    let email = '';
    let phone = '';
    let address = '';
    let postCode = '';
    submitBtn.on('click', submit);
    $('#edit').on('click', edit);
    $('#continue').on('click', continueFunc);

    

    function submit(){
     
        if ($('#fullName').val() && $('#email').val()){
            submitBtn.attr('disabled', true);
            $('#edit').attr('disabled', false);
            $('#continue').attr('disabled',false);

            fullName = $('#fullName').val();
            email = $('#email').val();
            phone = $('#phoneNumber').val();
            address = $('#address').val();
            postCode = $('#postalCode').val();
   

            let ul = $('#infoPreview');
            let nameLi = $(`<li>Name: ${$('#fullName').val()}</li>`);
            let emailLi = $(`<li>E-mail: ${$('#email').val()}</li>`);
            let phoneLi = $(`<li>Phone: ${$('#phoneNumber').val()}</li>`);
            let addressLi = $(`<li>Address: ${$('#address').val()}</li>`);
            let postCodeLi = $(`<li>Postal Code: ${$('#postalCode').val()}</li>`);

            ul.append(nameLi).append(emailLi)
            .append(phoneLi).append(addressLi).append(postCodeLi);

            $('#fullName').val('');
            $('#email').val('');
            $('#phoneNumber').val('');
            $('#address').val('');
            $('#postalCode').val('');
        }
    }

    function edit(){
        $('#fullName').val(fullName);
        $('#email').val(email);
        $('#phoneNumber').val(phone);
        $('#address').val(address);
        $('#postalCode').val(postCode);

        submitBtn.attr('disabled', false);
        $('#edit').attr('disabled', true);
        $('#continue').attr('disabled', true);
        $('#infoPreview li').remove();
    }

    function continueFunc(){
        submitBtn.attr('disabled', true);
        $('#edit').attr('disabled', true);
        $('#continue').attr('disabled', true);

        let h2 = $('<h2>Payment details</h2>');
        let sel = $('<select id = "paymentOptions" class = "custom-select"><option selected disabled hidden>Choose</option><option value="creditCard">Credit Card</option><option value="bankTransfer">Bank Transfer</option></select>');
        sel.on('change',changePayment);
        let div = $('<div id = "extraDetails"></div>');

        container.append(h2).append(sel).append(div);

       

        function changePayment(){
            let value = $('#paymentOptions').find(":selected").val();
            let extraDiv = $("#extraDetails");
            extraDiv.empty();
            let btn = $('<button id = "checkOut">Check Out</button>').on("click", checkOut);
            if (value === 'creditCard') {

                // Code below does not work
                
                // let firstDiv = $('<div id="inputLabel">Card Number<input></div>');
                // let br = $('<br>');
                // let secDiv = $('<div id="inputLabel">Expiration Date<input></div>');
                // let thirdDiv = $('<div id="inputLabel">Security Numbers<input></div>');
               

                // extraDiv.append(firstDiv).append(br).append(secDiv).append(br)
                //     .append(thirdDiv).append(br).append(btn);

                let cardNumberElement = $("<div class='inputLabel'>").text("Card Number").append($("<input>"));
                let expirationDateElement = $("<div class='inputLabel'>").text("Expiration Date").append($("<input>"));
                let securityNumbersElement = $("<div class='inputLabel'>").text("Security Numbers").append($("<input>"));

                extraDiv
                    .append(cardNumberElement)
                    .append($("<br>"))
                    .append(expirationDateElement)
                    .append($("<br>"))
                    .append(securityNumbersElement)
                    .append($("<br>"));

                    extraDiv.append(btn);

            
            } else if (value === 'bankTransfer'){
                let p = $("<p>");
                p.append("You have 48 hours to transfer the amount to:")
                    .append($("<br>"))
                    .append("IBAN: GR96 0810 0010 0000 0123 4567 890");
                extraDiv.append(p);

                extraDiv.append(btn);
            }
        }

        function checkOut() {
            let wrapper = $("#wrapper");
            let h4 = $("<h4>").text("Thank you for your reservation!");
            wrapper.empty();
            wrapper.append(h4);
        }
    }
}

