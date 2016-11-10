'use strict'
$(document).ready(() => {
  list()

  //$('.something').append(result)
})


//  global variable
const URL = 'http://localhost:3000/api/'

let list = () => {
  $.ajax({
    url: URL + 'questions',
    success: (data) => {
      var html = data.map(datum => `
        <h3> ${datum.title} </h3> <br><p> ${datum.content}</p><br>  `)
      console.log(data);
      $('.question-summary').append(html)
    }
  })
}
