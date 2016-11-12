
/* add new question */

  function addQuestion(){
        $(`#formQusetion`).remove();
       Question = {
        title : $('#title').val(),
        image   : $('#image').val(),
        question  : $('#question').val()

      }

      sendQuestion(Question);//send data to create

  }

  /* function to create in mongo */

  function sendQuestion(Question){

    $.ajax({
      url         : "http://localhost:3000/api/question",
      method      : 'post',
      contentType : 'application/x-www-form-urlencoded',
      data        : Question,
      success     : function (data){

        let resultHTML = `
        <div class="featurette" id="${data._id}">
        <hr>
        <img class="featurette-image img-circle img-responsive pull-right" style ="width:50%"  src="${data.image}">
        <h2 class="featurette-heading">${data.title}
        </h2>
        <p class="lead">${data.question}</p>
        <button style="font-family:ubuntu" type="button" name="button"  onclick="UpdateQuestion(${data._id})">Update</button>
        <button style="font-family:ubuntu" type="button" name="button"  onclick="deleteQuestion(${data._id})">Delete</button>
        </div>`

        $("#show").prepend(resultHTML)
      }
    })
  }

  /* show all data using ajax */

  function loadData(){
    $.ajax({
      url         : "http://localhost:3000/api/question",
      method      : 'get',
      contentType : 'application/x-www-form-urlencoded',
      data        : {},
      success     : function (data){
           var html = "";
           for(var i = 0; i < data.length; i++){
             html += `
             <div class="featurette" id="${data[i]._id}">
             <hr>
             <img class="featurette-image img-circle img-responsive pull-right" src="${data[i].image}">
             <h2 class="featurette-heading">${data[i].title}
             </h2>
             <p class="lead">${data[i].question}</p>
             <button style="font-family:ubuntu" type="button" name="button"  onclick="UpdateQuestion(${data[i]._id})">Update</button>
             <button style="font-family:ubuntu" type="button" name="button"  onclick="deleteQuestion(${data[i]._id})">Delete</button>
             </div>`
           }
          $("#show2").prepend(html)
         }
    })
  }


  /* the end of create */

  function deleteQuestion(id){
    $.ajax({
      url         : "http://localhost:3000/api/question/"+id,
      method      : 'delete',
      contentType : 'application/x-www-form-urlencoded',
      data        : {'id':id},
      success     : function(data) {
        console.log(data);
        $(`#${data._id}`).remove();
      }
    })
  }

/*  update question */

  function UpdateQuestion(id){
    var html = `<div class="container" id ="update${id}" >
      <div class="form-group">
        <div class="form-group">
          <br>
          <label for="title">Title:</label>
          <input type="text" class="form-control" name="title" id ="titleupdate${id}" placeholder = "title">
        </div>
        <label for="exampleTextarea"> </label>
        <textarea class="form-control" name = "question" id ="imageupdate${id}" rows="3" placeholder = "url image"></textarea>
        <label for="exampleTextarea"> </label>
        <textarea class="form-control" name = "question" id ="questionupdate${id}" rows="3" placeholder = " question "></textarea>
      </div>
      <button type="button" class="btn btn-primary"  onclick= "update(${id})" >Submit</button>
    </div>`
    $(`#${id}` ).replaceWith( html);
  }

  function update(id){

    Question = {
      id     : id,
      image : $(`#imageupdate${id}`).val(),
      title : $(`#titleupdate${id}`).val(),
      question  : $(`#questionupdate${id}`).val()
   }
    $.ajax({
      url         : "http://localhost:3000/api/question/"+id,
      method      : 'put',
      contentType : 'application/x-www-form-urlencoded',
      data        : Question,
      success     : function(data) {
        $(`#update${data._id}`).remove()
        deleteQuestion(data._id);
        sendQuestion(Question);
      }
    })
  }

/* the end of update question */

/* load data to show all data calling after all document of html loaded */

  $(document).ready(function(){
    loadData()
  })
