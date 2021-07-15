jQuery(document).ready(function() {
	
  /*
      Fullscreen background
  */
  $.backstretch("assets/img/backgrounds/background.jpg");

  // 提交修改密码表单
  $('.btn').on('click',e => {
    e.preventDefault();
    if($('.form-username').val() != '' && $('.form-password').val() != '' && $('.form-cpassword').val() != '') {
      if( $('.form-password').val() == $('.form-cpassword').val()){
        fetch('http://8.135.53.8:8080/updatePwd/',{
          method: 'POST',
          mode: 'cors', // 是否支持跨域,可选择cors、same-origin和no-cors
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
           },
          body: JSON.stringify({
              id: $('.form-userid').val(),
              name: $('.form-username').val(),
              password: $('.form-password').val()
          })
        }).then(res => {
          res.json().then(data => {
            if(data.status == 1) {
              window.alert('修改成功');
              $('.form-username, .form-userid, .form-password, .form-cpassword').removeClass('input-error');
              $('.form-username, .form-userid, .form-password, .form-cpassword').val('');
              window.location = 'index.html';
            } else {
              window.alert('修改失败');
              $('.form-username, .form-userid, .form-password, .form-cpassword').addClass('input-error');
            }
          })
        })
      } else {
        window.alert('两次密码不一致');
        $('.form-username, .form-userid, .form-password, .form-cpassword').addClass('input-error');
      }
    } else {
      window.alert('修改内容不能为空');
      $('.form-username, .form-userid, .form-password, .form-cpassword').addClass('input-error');
    }
  })

})
