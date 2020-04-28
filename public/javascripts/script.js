$('#btnsignup').click(function(){

    $.ajax({
        url: "/register",
        type: "POST",
        data: {
            username: $('#names').val(),
            useremail: $('#emails').val(),
            password: $('#passs').val()
        },
        success:function (result) {
            console.log(result);
            alert("Register Successful");
        },
        error:function (error) {
            alert("Error" + error);
        }
    })
})

$('#btn_signin').click(function(){
    
    var emails = $('#email_input').val();
    var password = $('#pass_input').val();

    emails = emails.trim();
    password = password.trim();

    if(emails.length <= 0){
        alert("Email invaild");
        return 0;
    }
    if(password.length <= 0){
        alert("Password invaild");
        return 0;
    }
    else{
        $.ajax({
            url: "/login",
            type: "POST",
            data: {
                useraccount: emails,
                userpassword: password
            },
            success: function(result){
                //Check return result if correct go to main page
                if(result === "Well Done"){
                    alert("Login Successful");
                    location.replace("/mainpages");
                }else{
                    alert("Login Failed");
                    return 0;
                }
            },
            error: function(error){
                alert("Error" + error);
            }
        })
    }
})