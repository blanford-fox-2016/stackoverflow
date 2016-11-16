const questionId = $.url().param('questid')
const URL = 'http://localhost:3000/api/questions/'+questionId+'/comments/'

$(document).ready(function(){
  showQuestion()

  //process add comment
  $('#btn_add_comment').on('click', function(e){
    e.preventDefault()
    processNewComment()
  })


  //process show all comments
  showAllComments()
})

function edit_comment(id){
  $.ajax({
    url: 'http://localhost:3000/api/questions/'+questionId,
    success: function(get_one_data){
      console.log(get_one_data);
    }
  })
}

function processedit_comment(id){
  $.ajax({
    url: URL+id,
    method: "PUT",
    success: function(edited_data){
      console.log(edited_data);
      $('#form_new_comment #content').val('lol')
    }
  })
}

function delete_comment(id){
  $.ajax({
    url: URL+id,
    method: "DELETE",
    success: function(deleted_comment){
      // console.log(deleted_comment);
      $(`#comment_${deleted_comment.id}`).remove()
    }
  })
}

function showAllComments(){
  $.ajax({
    url: 'http://localhost:3000/api/questions/'+questionId,
    success: function(all_comments){
      // console.log(all_comments.comment);
      if(all_comments.comment.length > 1){
        var all_comments_HTML = ''
        for (var i = 0; i < all_comments.comment.length; i++) {
          all_comments_HTML += `
          <div class="panel panel-default" id="comment_${all_comments.comment[i].commentId}">
            <div class="glyphicon glyphicon-remove btn btn-danger btn-sm pull-right" onclick="delete_comment('${all_comments.comment[i].commentId}')"></div>

            <div class="glyphicon glyphicon-pencil btn btn-warning btn-sm pull-right" onclick="edit_comment('${all_comments.comment[i].commentId}')"></div>

            <div class="panel-body">
              <span>${all_comments.comment[i].content}</span>
            </div>
          </div>
          `
        }
        $('#show_comments').append(all_comments_HTML)
      }
    }
  })
}

function processNewComment(){
  $.post({
    url: URL,
    data: {
      content: $('#form_new_comment #content').val()
    },
    success: function(new_comment){
      console.log(new_comment);
      var new_comment_HTML = `
      <div class="panel panel-default" id="comment_${new_comment.commentId}">
        <div class="glyphicon glyphicon-remove btn btn-danger btn-sm pull-right" onclick="delete_comment('${new_comment.commentId}')"></div>

        <div class="glyphicon glyphicon-pencil btn btn-warning btn-sm pull-right" onclick="edit_comment('${new_comment.commentId}')"></div>
        <div class="panel-body">
          <span>${new_comment.content}</span>
        </div>
      </div>`

      $('#show_comments').append(new_comment_HTML)
      $('#form_new_comment #content').val('')
    }
  })
}

function showQuestion(){
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
