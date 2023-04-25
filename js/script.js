$('#btn_timezone').click(function() {

    $.ajax({
        url: "php/TimeZone.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#lng').val()
        
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#txtViewResult').html(result['data']['countryName']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
           
            console.log(jqXHR);
        }
    }); 
    
});



$('#btn_address').click(function() {

    $.ajax({
        url: "php/address.php",
        type: 'POST',
        dataType: 'json',
        data: {
            addLat: $('#addLat').val(),
            addLng: $('#addLng').val()
        
        },
        success: function(result) {

            console.log(JSON.stringify(result));

                if (result.status.name == "ok") {

                    $('#txtViewResult').html(result['data']['postalcode']);

                }
        
            },
        error: function(jqXHR, textStatus, errorThrown) {
           
            console.log(jqXHR);
        }
    }); 
    
});



$('#btn_population').click(function() {

    $.ajax({
        url: "php/population.php",
        type: 'POST',
        dataType: 'json',
        data: {
            popLat: $('#popLat').val(),
            popLng: $('#popLng').val()
        
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#txtViewResult').html(result['data']['population']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
           
            console.log(jqXHR);
        }
    }); 
    
});