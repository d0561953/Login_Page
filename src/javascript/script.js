$('$reg_btn').click(function(){
    console.log("BTN_CLICK")
    $ajax({
        type: "GET",
        url: '/register_account'
    })
})