$(function() {							 
	
    $('#slaytexContactForm input').focus(function(){
        $('#imahuman').val("namuh");
    });

    $('#slaytexContactForm input').click(function(){
        $('#imahuman').val("namuh");
    });

    $('#slaytexContactForm textarea').focus(function(){
        $('#imahuman').val("namuh");
    });

    $('#slaytexContactForm textarea').click(function(){
        $('#imahuman').val("namuh");
    });

    $('#sc_submit').click(function(){
        $('.error').removeClass('error');
        // Validation
        var fullname = $('#sc_fullname').val();
        var email = $('#sc_emailaddress').val();
        var comments = $('#sc_comments').val();
        var imahuman = $('#imahuman').val();

        if(fullname == ""){
            $('#sc_fullname').addClass('error');
        }

        if(email == ""){
            $('#sc_emailaddress').addClass('error');
        }else{
            var emailPattern = /^(([a-zA-Z][a-zA-Z\&\-\.\'\s]*|)|(“[\w-+\s]+”)|([\w-+]+(?:\.[\w-+]+)*)|(“[\w-+\s]+”)([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i;
            if( !emailPattern.test(email)){
               $('#sc_emailaddress').addClass('error');
               $('#sc_emailaddress').val("Please enter a valid email address.");
            }else{
                var emailvalid = "yes";
            }
        }

        if(comments == ""){
            $('#sc_comments').addClass('error');
        }

        if(fullname != "" && emailvalid == "yes" && comments != ""){
            $('#loadergif').show();
            var dataString = 'sc_fullname='+ fullname + '&sc_emailaddress=' + email + '&sc_comments=' + comments +'&imahuman=' + imahuman;  
            //alert (dataString);return false;  
            $.ajax({  
              type: "POST",  
              url: "processContact.php",  
              data: dataString,  
              success: function() {  
                $('#loadergif').hide();
                $('#successMessage').css("display","block").fadeOut(5500);
                $('#sc_fullname').val("");
                $('#sc_emailaddress').val("");
                $('#sc_comments').val("");
              }  
            });  
            return false;
        }
        return false;
    });



							 
	
});


