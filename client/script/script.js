$('document').ready(function(){
  $('#form_new_question').hide()
  $('#show_form_hide').hide()
  $('#btn_update').hide()

  show_all()

  form_new_question()

  add_question()

})

function show_all(){
  $.ajax({
    url : 'http://localhost:3000/api/questions',
    success : function(all_data){
      console.log(all_data)
      let data_HTML = ``
      for(var i = 0 ; i < all_data.length ; i++){
        data_HTML += `
        <tr id=${all_data[i].questionId}>
          <td>
            ${all_data[i].votes.length} votes | ${all_data[i].comment.length} comments
          </td>
          <td>
            <a href="questions.html?id=${all_data[i].questionId}">${all_data[i].title}</a>
          </td>
          <td>
            <button type="button" class="btn btn-warning" onclick="submitEditButton('${all_data[i].questionId}')">Edit</button>
            <button type="button" class="btn btn-danger"onclick="submitDeleteButton('${all_data[i].questionId}')">Delete</button>
          </td>
        </tr>
        `
      }
      $('#body_table').append(data_HTML)
    }
  })
}

function form_new_question(){
  $('#show_form_add').on('click', function(e){
     e.preventDefault()
     $('#form_new_question').show()
     $('#show_form_hide').show()
     $('#show_form_add').hide()
  })

  $('#show_form_hide').on('click', function(e){
     e.preventDefault()
     $('#form_new_question').hide()
     $('#show_form_hide').hide()
     $('#show_form_add').show()
  })
}

function add_question(){
  $('#btn_add').on('click', function(e){
    e.preventDefault()
    $.post({
      url         : 'http://localhost:3000/api/questions',
      data        : {
        title   : $('#title').val(),
        content : $('#content').val()
      },
      success : function(new_data){
        let appendHTML = `
          <tr id=${new_data.questionId}>
            <td>
               ${new_data.votes.length} votes | ${new_data.comment.length} comments
            </td>
            <td>
               <a href="questions.html?id=${new_data.questionId}">${new_data.title}</a>
            </td>
            <td>
              <button type="button" class="btn btn-warning" onclick="submitEditButton('${new_data.questionId}')">Edit</button>
              <button type="button" class="btn btn-danger"onclick="submitDeleteButton('${new_data.questionId}')">Delete</button>
            </td>
          </tr>`
          $('#body_table').prepend(appendHTML)
      }
    })
    $('#form_new_question')[0].reset()
    $('#form_new_question').hide()
    $('#show_form_hide').hide()
    $('#show_form_add').show()
  })
}

function submitEditButton(id){
  $.ajax({
    url:  "http://localhost:3000/api/questions/"+id,
    method: 'PUT',
    success: (edited) => {
      $('#form_new_question').show()
      $('#show_form_hide').show()
      $('#show_form_add').hide()

      $('#title').val(edited.title)
      $('#content').val(edited.content)
      //
      // let hidden_id = `
      // <tr id="hidden_id">
      //   <td>
      //     <input type="hidden" id="id" value="${edited.questionId}">
      //   </td>
      // </tr>`
      //
      // $('#form_new_question').append(hidden_id)
      //
      submitUpdateButton(id)

      $('#btn_add').hide()
      $('#btn_update').show()
    }
  })
}

function submitUpdateButton(id){
  $('#btn_update').on('click', (e) => {
    e.preventDefault()
    let edited_data = {
      title : $('#title').val(),
      content : $('#content').val()
    }

    $.ajax({
      url: 'http://localhost:3000/api/questions/'+id,
      method : 'PUT',
      data : edited_data,
      success : function(new_edited){
        let replace_row = `
          <tr>
          <tr id=${new_edited.questionId}>
            <td>
               ${new_edited.votes.length} votes | ${new_edited.comment.length} comments
            </td>
            <td>
               <a href="questions.html?id=${new_edited.questionId}">${new_edited.title}</a>
            </td>
            <td>
              <button type="button" class="btn btn-warning" onclick="submitEditButton('${new_edited.questionId}')">Edit</button>
              <button type="button" class="btn btn-danger"onclick="submitDeleteButton('${new_edited.questionId}')">Delete</button>
            </td>
          </tr>
          </tr>
        `
        $(`#${new_edited.questionId}`).replaceWith(replace_row)
        $('#form_new_question')[0].reset()

        $('#form_new_question').hide()
        $('#show_form_hide').hide()
        $('#show_form_add').show()

        $('#btn_add').show()
        $('#btn_update').hide()
      }
    })
  })
}

function submitDeleteButton(id){
  $.ajax({
   url         : 'http://localhost:3000/api/questions/'+id,
   type        : 'DELETE',
   dataType    : 'json',
   contentType : 'application/x-www-form-urlencoded',
   success     : (deleted) => {
     console.log(deleted);
     $(`#${deleted.questionId}`).remove()
   }
 })
}
