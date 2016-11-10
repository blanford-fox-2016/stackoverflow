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
        newHTML += `<li>
                      <div class="collapsible-header"><i class="material-icons">live_help</i>${data.title}<span data-badge-caption="answers" class="new badge">${data.answers.length}</span></div>
                      <div class="collapsible-body">
                        <p>${data.content}<a href="/question/${data.slug}">Details</a></p>
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
        dataHTML += `<li>
                      <div class="collapsible-header"><i class="material-icons">live_help</i>${data[i].title}<span data-badge-caption="answers" class="new badge">${data[i].answers.length}</span></div>
                      <div class="collapsible-body">
                        <p>${data[i].content}<a href="/question/${data[i].slug}">Details</a></p>
                      </div>
                    </li>`
      }
      $("#questions").append(dataHTML);
    }
  })
})

//   // GET ALL DATA ITEM
//   $.ajax({
//     type: "GET",
//     url: "http://localhost:3000/api/question/",
//     dataType: "json",
//     contentType: 'application/x-www-form-urlencoded',
//     success: function(data) {
//       var dataHTML = '';
//       for (var i = 0; i < data.length; i++) {
//         dataHTML += `<li>
//                       <div class="collapsible-header"><i class="material-icons">live_help</i>${data[i].title}<span data-badge-caption="answers" class="new badge">${data[i].answers.length}</span></div>
//                       <div class="collapsible-body">
//                         <p>${data[i].content}<a href="#">Details</a></p>
//                       </div>
//                     </li>`
//       }
//       $("#questiondetail").append(dataHTML);
//     }
//   })
// })
//
// function editItem(id) {
//   var title = document.getElementById('detArticleTitle'+id).innerHTML;
//   var content = document.getElementById('detArticleContent'+id).innerHTML;
//   var category = document.getElementById('detArticleCategory'+id).innerHTML;
//   document.getElementById('detArticleTitle'+id).innerHTML = `<input class="form-control arcTitle" id="articleTitle${id}" type="text" value="${title}">`;
//   document.getElementById('detArticleCategory'+id).innerHTML = `<input class="form-control arcCategory" id="articleCategory${id}" type="text" value="${category}">`;
//   document.getElementById('detArticleContent'+id).innerHTML = `<textarea class="form-control arcContent" id="articleContent${id}">${content}</textarea>`;
//   document.getElementById('editbtn'+id).innerHTML = `<button type="button" class="btn btn-success edt" onclick="updateItem('${id}')" data-dismiss="modal">Save</button>`;
// }
//
// function updateItem(id) {
//   $.ajax({
//     url: "http://localhost:3000/api/article/"+id,
//     method: 'PUT',
//     contentType: 'application/x-www-form-urlencoded',
//     data : {
//       _id : id,
//       title : $('#articleTitle'+id).val(),
//       content : $('#articleContent'+id).val(),
//       category : $('#articleCategory'+id).val(),
//       slug: $('#articleTitle').val().replace(' ', '-').toLowerCase()
//     },
//     success: function(editedData) {
//       console.log(editedData);
//       $.ajax({
//         type: "GET",
//         url: "http://localhost:3000/api/question/"+id,
//         dataType: "json",
//         contentType: 'application/x-www-form-urlencoded',
//         success: function(data) {
//           console.log(data);
//         }
//       })
//     }
//   })
// }
//
//
// function deleteItem(id) {
//   $.ajax({
//     url         : 'http://localhost:3000/api/question/'+id,
//     type        : 'DELETE',
//     dataType    : 'json',
//     contentType : 'application/x-www-form-urlencoded',
//     success     : function() {
//
//     }
//   })
//
// }
