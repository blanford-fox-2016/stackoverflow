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
      var html = data.map(datum =>
        `<h3>${datum.title} </h3><br>
        <p> ${datum.content}</p>
        <button onClick=updatePost('${datum.question_id}') class='deleteQuestion btn btn-success'> Update </button>
        <button onClick=deletePost('${datum.question_id}') class='updateQuestion btn btn-danger'> Delete </button>`)
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
      //emptying the html
      $('.question-summary').html('')
      list()
    }
  })
}

let deletePost = (obj_id) => {
  // how to get a class with the same id with this
  //console.log(obj_id);
  $.ajax({
    url: URL + 'questions/' + obj_id,
    type: 'delete',
    success: (data) => {
      console.log(data);
      $('.question-summary').html('')
      list()
    },
    error: (data) => {
      console.log(data);
    }
  })
}

let updatePost = (obj_id) => {
  $.ajax({
    url: URL + 'questions/' + obj_id,
    type: 'put',
    data: {
      title: 'Ini udah keganti',
      content: 'Keganti lagi'
    },
    success: (data) => {
      $('.question-summary').html('')
      list()
    }
  })
}
