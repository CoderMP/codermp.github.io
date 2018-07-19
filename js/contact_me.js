$(function() {
    $("#submit").click(function() {
        var data = {
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        };

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: data,
            success: function(){
                $("#response").addClass("text-success visible").removeClass("invisible")
            },
            error: function(){
                $("#response").addClass("text-danger visible").removeClass("invisible")
            }
        });

        return false;
    });
});