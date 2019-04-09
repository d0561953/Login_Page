$('#reg_btn').click(function(){
    location.replace("/sign_up");
})

$('#log_btn').click(function(){
    location.replace("/");
})

$('#btn_signup').click(function() {
    var username = $('#name_input').val();
    var useremail = $('#email_input').val();
    var pass1 = $('#pass_input').val();
    var pass2 = $('#second_pass_input').val();

    console.log("username" + username);
    console.log("useremail" + useremail);
    console.log("pass1" + pass1);
    console.log("pass2" + pass2);

    if(pass1 !== pass2){
        alert("Password not match!!!");
    }
    else{
        alert("Wait for momment");
        $.ajax({
            type: "GET",
            url: '/register_account/' + username + '/' + useremail + '/' + pass1,
            success:function(result){
                console.log(result);
            },
            error: function(error){
                alert("Error $(error)");
            }
        })
    }
})