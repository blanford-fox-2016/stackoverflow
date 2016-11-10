$(document).ready(function() {

    $("#form_question").submit(function(event) {
        newQuestion()
        event.preventDefault()
    });

})

function newQuestion() {
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
            alert('create post success')

        }
    })
}

function QuestionList() {
    $.ajax({
        url: `http://localhost:3000/api/question`,
        method: "get",
        data: {
            author: auth_static,
            title: formTitle,
            content: formContent
        },
        success: function(data) {
            console.log(data);
            alert('create post success')

        }
    })

}
