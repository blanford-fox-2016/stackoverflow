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
                                <p>${data[i].content}</p>
                            </div>
                            <div class="ui segment right attached">
                              <div class="ui buttons">
                                <a href="" class="ui positive button">Update</a>
                                <div class="or"></div>
                                <a href="" class="ui negative button">Delete</a>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>`
            }
            $('#all_question').append(html)

        }
    })

}
