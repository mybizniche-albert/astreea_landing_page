(function($){
    var app = {
        init:function(){
            
            grecaptcha.ready(function() {
                grecaptcha.execute('6LfBuskZAAAAAAyja926iMPRDXhxSeB0EENzuOkE', {action: 'submit'}).then(function(token) {
                    $("#wpcf7-form").find("input[name='g-response']").val(token);
                });
            });
            var in_progress = false;
            $("#wpcf7-form").submit(function(e){
                e.preventDefault();
                var first_name = $(this).find('input[name="mbn-fname"]').val();
                var last_name = $(this).find('input[name="mbn-lname"]').val();
                var email = $(this).find('input[name="mbn-email"]').val();
                var phone = $(this).find('input[name="mbn-phone"]').val();
                var message = $(this).find('textarea[name="mbn-message"]').val();
                var g_response = $(this).find('input[name="g-response"]').val();
                if(in_progress==true){
                    return false;
                }
                $("#wpcf7-form").find("input[type='text'],input[type='email'],textarea").attr("disabled",true);
                $("#wpcf7-form").find('input[type="submit"]').val("Sending...");
                in_progress = true;
                
                $.ajax({
                    url:"https://astreea.sidebarstore.com/mail.php",
                    type:"POST",
                    data:{
                        first_name:first_name,
                        last_name:last_name,
                        email:email,
                        phone:phone,
                        message:message,
                        g_response:g_response
                    },
                    success:function(h){
                        $("#wpcf7-form").find("input[type='text'],input[type='email'],textarea").attr("disabled",false);
                        in_progress = false;
                        var json = $.parseJSON(h);
                        console.log(json);
                        $("#wpcf7-form").find('input[type="submit"]').val("Submit");
                        if(json.success){
                         
                            $("#wpcf7-form").find("input[type='text'],input[type='email'],textarea").val("");
                             window.location = "thank-you.html";
                        }else{
                            alert(json.message);
                        }
                    },error:function(){
                        $("#wpcf7-form").find("input[type='text'],input[type='email'],textarea").attr("disabled",false);
                        $("#wpcf7-form").find('input[type="submit"]').val("Submit");
                       alert("Could not send your request, server error");
                    }

                })

                

            });
        }
    };
    document.addEventListener('DOMContentLoaded', app.init);

})(jQuery);