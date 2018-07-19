$(function() {
    $("#submit").on('click touchstart', function(e) {
        e.preventDefault();
        $("#submit").html("<i class='fa fa-cog fa-spin'></i> Sending").prop('disabled', true);
        var $email_form = $("#emailForm");
        var emailData = $email_form.serialize();

        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: emailData,
            success: function(){
                if (response.status){
                    $("#emailForm .input").val('');
                    $("#emailForm .textarea").val('');
                    $("#response").addClass("text-success visible").removeClass("invisible").text("Email Sent!");
                }
            },
            error: function(){
                $("#response").addClass("text-danger visible").removeClass("invisible").text("Email Failed to send!");
            }
        });

        return false;
    });
});