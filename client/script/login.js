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
  $('#btn_login').on('click', function(e){
    e.preventDefault()
    processLogin()
  })
})

function processLogin(){
  var data_login_user = {
    username: $('#username').val(),
    password: $('#password').val()
  }
  $.post({
    url: 'http://localhost:3000/api/users/login',
    data: data_login_user,
    success: function(new_user){
      console.log(new_user);
      localStorage.setItem('token', new_user.token)
      console.log(localStorage.getItem('token'));
      console.log(Auth.getUser().username);
      if(Auth.getUser().username){
        window.location = 'home.html'
      }else{
        alert('input salah')
        // window.location = 'index.html'
        localStorage.removeItem('token')
      }
    }
  })

}
