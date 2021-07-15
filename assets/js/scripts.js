jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/background.jpg");
    
    /*
        Form validation
    */
    // $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    // 	$(this).removeClass('input-error');
    // });
    
    // $('.login-form').on('submit', e => {
    //     e.preventDefault();
    // 	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    // 		if( $(this).val() == "" ) {
    // 			$(this).addClass('input-error');
    // 		}
    // 		else {
    // 			$(this).removeClass('input-error');
    // 		}
    // 	});
    // });

    $('.btn').on('click',e => {
        e.preventDefault();
        if($('.form-username').val() != '' && $('.form-password').val() != '') {
            fetch('http://8.135.53.8:8080/loginJson/',{
                method: 'POST',
                mode: 'cors', // 是否支持跨域,可选择cors、same-origin和no-cors
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                 },
                body: JSON.stringify({
                    id: $('.form-username').val(),
                    password: $('.form-password').val()
                })
            }).then(res => {
                res.json().then(data => {
                    if(data.status != 1) {
                        window.alert('账号或密码错误');
                        $('.form-username, .form-password').val('')
                        $('.form-username, .form-password').addClass('input-error');
                    } else {
                        $('.form-username, .form-password').val('')
                        $('.form-username, .form-password').removeClass('input-error');
                        window.location = 'main.html?name=' + data.name + '&id=' + data.id; // 页面跳转
                    }
                })
            })
        } else {
            window.alert('账号密码不能为空');
            $('.form-username, .form-password').addClass('input-error');
        }
    })

});
