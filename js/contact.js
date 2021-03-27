$(function ()
  {
    $('#contact-form').submit(function(e)
        {
            e.preventDefault();
            $('.comments').empty();
            var postdata = $('#contact-form').serialize();
        
            $.ajax(
                {
                    type: 'POST',
                    url: 'php/contact.php',
                    data: postdata,
                    dataType: 'json',
                    success: function(result)
                        {
                            if(result.isSuccess)
                                {
                                    window.alert("Votre message à bien été envoyé. Merci de m'avoir contacté, je vous recontacte le plus rapidement possible !");
                                    $("#contact-form")[0].reset();
                                }
                            else
                                {
                                    $("#firstname + .comments").html(result.firstnameError);
                                    $("#name + .comments").html(result.nameError);
                                    $("#tel + .comments").html(result.telError);
                                    $("#email + .comments").html(result.emailError);
                                    $("#sujet + .comments").html(result.sujetError);
                                    $("#message + .comments").html(result.messageError);
                                }
                        } 
                }); 
        });  
})





//<p id='thankyou'>Votre message à bien été envoyé, je vous recontacte le plus vite possible !</p>