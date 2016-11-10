'use strict'
$(document).ready(() => {
  list()
})


// global variable
const URL = 'http://localhost:3000/api/questions'

let list = () => {
  $.ajax({
    url: URL,
    success: (data) => {
      // transforming from javascript to html via class
      // please provide html container contains it
      $('some class or id').append('html result yo')
    }
  })
}
