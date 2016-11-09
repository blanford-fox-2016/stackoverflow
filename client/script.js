$(document).ready(function () {
    var rowOfQuestion = $('#rowOfQuestion')
    $.ajax({
        url: "http://localhost:3000/api/question",
        success: function (data) {
            $.extend({}, data)
            var question = []
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].title)
                question.push(`
                                <div class="row">
                                    <hr>
                                    <div class="col-sm-12">
                                        <div id="question1" class="row">
                                            <div class="col-sm-1 text-center">
                                                <div>${data[i].votes.length}</div>
                                                <div>votes</div>
                                            </div>
                                            <div class="col-sm-1 text-center">
                                                <div>${data[i].answers.length}</div>
                                                <div>answers</div>
                                            </div>
                                            <div class="col-sm-1 text-center">
                                                <div>10</div>
                                                <div>view</div>
                                            </div>
                                            <div class="col-sm-9">
                                                <h4>${data[i].title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                        `)
            }

            rowOfQuestion.append(question.join(""))
        }

    })
})