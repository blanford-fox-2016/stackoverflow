'use strict'
$(document).ready(() => {
  $('#big-question-form').submit((event) => {
    create()
    event.preventDefault();
  })
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
        <h3> ${datum.title} </h3><br><p> ${datum.content}</p><br>  `)
      console.log(data);
      $('.question-summary').append(html)
    }
  })
}

let create = () => {
  $.ajax({
    url: URL + 'questions',
    type: 'post',
    data : {
      // Taking the data from client side
      question_id : Date.now(),
      title : $('#title-form').val(),
      content : $('#question-form').val()
    },
    success: (data) => {
      $('.question-summary').html('')
      list()
      console.log(data);
      // var newQustion = data.map(datum => `<h3> ${data.title} </h3> <br> <p> ${data.content} </p><br>`)
      // $('.question-summary').append(data)
    }
  })
}

// let find = () => {
//   $.ajax({
//     url: URL + 'questions/'+ req.params.id,
//     success: (data) => {
//       var html = data.map(datum => `
//         <h3> ${datum.title} </h3> <br><p> ${datum.content}</p><br>  `)
//       console.log(data);
//       $('.question-summary').append(html)
//     }
//   })
// }
