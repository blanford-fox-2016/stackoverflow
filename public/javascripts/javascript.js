$(document).ready(function() {

    $("#form_question").submit(function(event) {
        newQuestion(event)
    });
    QuestionList()
})

function newQuestion(event) {
    event.preventDefault()
    let formTitle = $('#field_title').val()
    let formContent = $('#field_content').val()
    let auth_static = 'admin'

    $.ajax({
        url: `http://localhost:3000/api/question`,
        method: "post",
        contentType: 'application/x-www-form-urlencoded',
        data: {
            author: auth_static,
            title: formTitle,
            content: formContent
        },
        success: function(data) {
            console.log(data);
            QuestionList()
            alert('create post success')

        }
    })
}
// <div class="ui segment">
//   <div class="ui buttons">
//     <a href="" class="ui positive button">Update</a>
//     <div class="or"></div>
//     <a href="" class="ui negative button">Delete</a>
//   </div>
// </div>

function QuestionList() {
    let html = ''
    $.ajax({
        url: `http://localhost:3000/api/question`,
        method: "get",
        success: function(data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                html += `   <div class='ui segment'> <div class='ui segment'>
                        <h1>${data[i].title}</h1>
                        <div class="ui segments">
                            <div class="ui segment">
                                <h5>Created by :</h5>
                                <p>${data[i].author}</p>
                            </div>
                              <div class="ui segment">
                                <div class='ui ignored info message'>
                                  <p>${data[i].content}</p>
                                </div>
                              </div>
                              <div class='ui segment' id='panel${data[i].questionId}'>
                              <button class="ui inverted green button" onclick=reply('${data[i].questionId}')>
                              Answer this question !
                              </button>
                              <button class="right floated ui inverted red button" onclick=reply('${data[i].questionId}')>
                              Delete
                              </button>
                              <button id='btnUpdate${data[i].questionId}'class="right floated ui inverted blue button" onclick=formUpdate('${data[i].questionId}')>
                              Update
                              </button>
                              </div>
                        </div>
                    </div>
                </div>`
            }
            $('#all_question').append(html)

        }
    })

}

function reply(parameter) {
    let container = $(`#panel${parameter}`)

    console.log(container);

}

function formUpdate(parameter) {
    let container = $(`#panel${parameter}`)
    let html = ''
    $(`#btnUpdate${parameter}`).hide()
    $.ajax({
        url: `http://localhost:3000/api/question/${parameter}`,
        method: "get",
        success: function(data) {
            html += `  <div id='newUpdateForm'class="ui segment">
                <div class="ui header center aligned">
                  <h3>Edit Question</h3>
                </div>
                <div class="ui blue segment">
                <form class="ui form">
                  <div class="field">
                    <label>Title</label>
                    <input name="title" placeholder="New Title" type="text" value='${data.title}'>
                  </div>
                  <div class="field">
                  <label>Content</label>
                    <textarea name="content" placeholder="New Content" type="text" value='${data.title}'></textarea>
                  </div>
                  <button class="ui inverted blue button" type="submit">Update</button>
                  </form>
                </div>
              </div>
`
            container.append(html)
            console.log(data);
        }
    })


}
