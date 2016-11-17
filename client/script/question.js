const questionId = $.url().param('questid')
const URL = 'http://localhost:3000/api/questions/'+questionId+'/comments/'
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
  showQuestion()

  //hide update button
  $('#btn_update_comment').hide()

  //process add comment
  $('#btn_add_comment').on('click', function(e){
    e.preventDefault()
    processNewComment()
  })

  //process show all comments
  showAllComments()

  //votes events listener
  //up-vote
  $('#up_vote').on('click', function(e){
    e.preventDefault()
    processUpVote()
  })
  //down_vote
  $('#down_vote').on('click', function(e){
    e.preventDefault()
    processDownVote()
  })

  //process logout
  $('#logout').on('click', function(e){
    e.preventDefault()
    processLogout()
  })
})

function processLogout(){
  localStorage.removeItem('token')
  window.location = 'index.html'
}

function processUpVote(){
  // console.log(Auth.getUser());
  $.post({
    url: 'http://localhost:3000/api/questions/'+questionId+'/votes',
    data: {
      user_id : Auth.getUser().sub
    }, success: function(clicked_vote){
      console.log(clicked_vote);
      $('#vote_total').text(clicked_vote.votes_count)
      $('#up_vote').prop("disabled", "true")
      $('#down_vote').removeAttr("disabled")
      // if(clicked_vote.votes_count === 1){
      //   $('#down_vote').prop("disabled", "true")
      // }
    }
  })
}

function processDownVote(){
  $.post({
    url: 'http://localhost:3000/api/questions/'+questionId+'/votes',
    method: "DELETE",
    data: {
      user_id : Auth.getUser().sub
    },success: function(one_data){
      console.log(one_data);
      console.log(`down`);
      $('#vote_total').text(one_data.votes.length)
      $('#up_vote').removeAttr("disabled")
      $('#down_vote').prop("disabled", "true")
    }
  })
}

function edit_comment(id){
  $.ajax({
    url: URL+id,
    success: function(get_one_data){
      console.log(get_one_data);
      $('#form_new_comment #content').val(get_one_data.content)
      $('#form_new_comment #id').val(get_one_data.commentId)

      //hide btn add & show btn update
      $('#btn_add_comment').hide()
      $('#btn_update_comment').show()
    }
  })
}

function process_edit_comment(){
  var new_comment = $('#form_new_comment #content').val()
  var commentId = $('#form_new_comment #id').val()
  $.ajax({
    url: URL+commentId,
    method: "PUT",
    data: {
      content: new_comment
    },
    success: function(edited_data){
      console.log(edited_data);
      var edited_data_HTML = `
      <div class="panel panel-default" id="comment_${edited_data.commentId}">
        <div class="glyphicon glyphicon-remove btn btn-danger btn-sm pull-right" onclick="delete_comment('${edited_data.commentId}')"></div>

        <div class="glyphicon glyphicon-pencil btn btn-warning btn-sm pull-right" onclick="edit_comment('${edited_data.commentId}')"></div>
        <div class="panel-body">
          <span>${edited_data.content}</span>
        </div>
      </div>`


      $(`#comment_${edited_data.commentId}`).replaceWith(edited_data_HTML)
      $('#form_new_comment #content').val("")


      //hide btn update & show btn add
      $('#btn_add_comment').show()
      $('#btn_update_comment').hide()
      $('#form_new_comment #id').val("")
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

function checkAuthComment(data){
  return (Auth.getUser().sub === data.author) ? `<div class="glyphicon glyphicon-remove btn btn-danger btn-sm pull-right" onclick="delete_comment('${data.commentId}')"></div>

  <div class="glyphicon glyphicon-pencil btn btn-warning btn-sm pull-right" onclick="edit_comment('${data.commentId}')"></div>` : ''
}

function addCreatedBy(data){
  `<span>${data.author}</span>`
}

function showAllComments(){
  $.ajax({
    url: 'http://localhost:3000/api/questions/'+questionId,
    success: function(all_comments){
      if(all_comments.comment.length > 0){
        var all_comments_HTML = ''
        for (var i = 0; i < all_comments.comment.length; i++) {
          all_comments_HTML += `
          <div class="panel panel-default" id="comment_${all_comments.comment[i].commentId}">
            ${checkAuthComment(all_comments.comment[i])}
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
      content: $('#form_new_comment #content').val(),
      author: Auth.getUser().sub
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
  console.log(Auth.getUser())
  $.ajax({
    url : 'http://localhost:3000/api/questions/'+questionId,
    success : function(one_data){
      console.log('11111',one_data)
      $('#title').text(one_data.title)
      $('#content').text(one_data.content)

      $('#vote_total').text(one_data.votes.length)
      for (var i = 0; i < one_data.votes.length; i++) {
        if(one_data.votes[i].author == Auth.getUser().sub){
          console.log(`ada`);
          $('#up_vote').prop("disabled", "true")
          $('#down_vote').removeAttr("disabled")
        }else{
          $('#up_vote').removeAttr("disabled")
          $('#down_vote').prop("disabled", "true")
        }
      }
      if(one_data.votes.length === 0){
        $('#down_vote').prop("disabled", "true")
      }
    }
  })
}
