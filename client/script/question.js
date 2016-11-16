$(document).ready(function(){
  showQuestion()
})

function showQuestion(){
  var questionId = $.url().param('id')
  // console.log(questionId)
  $.ajax({
    url : 'http://localhost:3000/api/questions/'+questionId,
    success : function(one_data){
      console.log(one_data)
      $('#title').text(one_data.title)
      $('#vote_total').text(one_data.votes.length)
      $('#content').text(one_data.content)
    }
  })
}
