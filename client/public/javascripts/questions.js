$(document).ready(function() {
  // console.log(inititle);
  //NEW DATA ITEM
  $("#submitQuestion").click(function() {
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/api/question",
      data: {
        title: $('#titleQuestion').val(),
        content: $('#contentQuestion').val(),
        answers: [],
        up: [],
        down: [],
        author: 'tamatamvan'
      },
      dataType: "json",
      success: function appendnew(data) {
        var newHTML = '';
        newHTML += `<li id="question-${data._id}">
                      <div class="collapsible-header"><i class="material-icons">live_help</i>${data.title}<span data-badge-caption="answers" class="new badge">${data.answers.length}</span></div>
                      <div class="collapsible-body">
                        <p>${data.content}<a href="/question/${data.slug}">Details</a></p>
                        <hr>

                        <div class="col s12" id="answers-${data.slug}">
                          <div class="card">
                            <div class="card-action">
                              <button onclick="deletequestion('${data._id}')" class="waves-effect waves-light btn">Delete</button>
                              <button onclick="deletequestion('${data._id}')" class="waves-effect waves-light btn">Edit</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>`;
        $( '#inputQuestions' ).each(function(){
            this.reset();
        });
        $("#questions").append(newHTML);
        // $(".modal-overlay").hide();
        // $(".modal").hide();
      }
    });
  });

  // GET ALL DATA ITEM
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/question",
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded',
    success: function(data) {
      var dataHTML = '';
      for (var i = 0; i < data.length; i++) {
        dataHTML += `<li id="question-${data[i]._id}">
                      <div class="collapsible-header"><i class="material-icons">live_help</i>${data[i].title}<span data-badge-caption="answers" class="new badge">${data[i].answers.length}</span></div>
                      <div class="collapsible-body">
                        <p>${data[i].content}</p>

                        <div class="col s12" id="answers-${data.slug}">
                          <div class="card">
                            <div class="card-action">
                              <button onclick="deletequestion('${data[i]._id}')" class="waves-effect waves-light btn">Delete</button>
                              <button onclick="deletequestion('${data[i]._id}')" class="waves-effect waves-light btn">Edit</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>`
      }
      $("#questions").append(dataHTML);
    }
  })
})

  // GET Single Data Question
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/question/"+inislug,
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded',
    success: function(data) {
      var dataHTML = '';
      dataHTML += `<div class="card">
                      <div style='display:none;' id='_id'>${data._id}</div>
                      <div class="card-content">
                        <span id="titleQuestionDet" class="card-title activator grey-text text-darken-4">${data.title}</span>
                        <p id="contentQuestionDet">${data.content}</p>
                      </div>
                      <div class="card-action">
                        <a href="#newanswer">Answer</a>
                        <span id='btneditquestion'><a href="#" onclick='editQuestion()'>Edit</a></span>

                      </div>
                    </div>`

      $("#question").append(dataHTML);
    }
  })
// })
//
function editQuestion() {
  var _id = document.getElementById('_id').innerHTML;
  var title = document.getElementById('titleQuestionDet').innerHTML;
  var content = document.getElementById('contentQuestionDet').innerHTML;
  document.getElementById('titleQuestionDet').innerHTML = `<br><div class="row">
  <div class="input-field col s12">
    <input id="titleQuestion" type="text" class="validate" value="${title}"/>
    <label for="title">Title</label>
  </div>
</div>`;
  document.getElementById('contentQuestionDet').innerHTML = `<div class="row">
  <div class="input-field col s12">
    <textarea id="contentQuestion" class="materialize-textarea">${content}</textarea>
    <label for="textarea1">Content</label>
  </div>
</div>`;
  document.getElementById('btneditquestion').innerHTML = `<a href="#" onclick='updateQuestion("${_id}")'>Save</a>`;
}
//
function updateQuestion(id) {
  var answers = [];
  var up = [];
  var down = [];
  $.ajax({
    url: "http://localhost:3000/api/question/"+id,
    method: 'PUT',
    contentType: 'application/x-www-form-urlencoded',
    data : {
      _id: id,
      title: $('#titleQuestion').val(),
      content: $('#contentQuestion').val(),
      answers: [],
      up: [],
      down: []
    },
    success: function(editedData) {
      location.reload();
      // console.log(editedData);
      // $.ajax({
      //   type: "GET",
      //   url: "http://localhost:3000/api/question/"+id,
      //   dataType: "json",
      //   contentType: 'application/x-www-form-urlencoded',
      //   success: function(data) {
      //     console.log(data);
      //   }
      // })
    }
  })
}
//
//
function deletequestion(id) {
  $.ajax({
    url         : 'http://localhost:3000/api/question/'+id,
    type        : 'DELETE',
    dataType    : 'json',
    contentType : 'application/x-www-form-urlencoded',
    success     : function() {
      $('#question-'+id).remove()
    }
  })
//
}
