const Auth = {
  getToken: () => {
    return localStorage.getItem('token')
  },
  getUser: () => {
    let token = Auth.getToken()
    if (!token) return {}
    else {
      return jwt_decode(token)
    }
  }
}
$(document).ready(function(){
  //process register
  $('#btn_register').on('click', function(e){
    e.preventDefault()
    processRegister()
  })
})

function processRegister(){
  var data_new_user = {
    username: $('#username').val(),
    password: $('#password').val()
  }
  $.post({
    url: 'http://localhost:3000/api/users',
    data: data_new_user,
    success: function(new_user){
      console.log(new_user);
      localStorage.setItem('token', new_user.token)
      console.log(localStorage.getItem('token'));
      window.location = 'home.html'
    }
  })
}
