$(document).ready(function() {
  // console.log(inititle);
  //NEW DATA ITEM
  $("#submitRegister").click(function() {
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/auth/register",
      data: {
        name: $('#regname').val(),
        email: $('#regemail').val(),
        username: $('#regusername').val(),
        password: $('#regpassword').val()
      },
      dataType: "json",
      success: function (data) {
        alert(`Registration Success`)
        $('#regform').each(function() {
          this.reset();
        })
        // var newHTML = '';
        // newHTML += `<li>
        //               <div class="collapsible-header"><i class="material-icons">live_help</i>${data.title}<span data-badge-caption="answers" class="new badge">${data.answers.length}</span></div>
        //               <div class="collapsible-body">
        //                 <p>${data.content}<a href="/question/${data.slug}">Details</a></p>
        //               </div>
        //             </li>`;
        // $( '#inputQuestions' ).each(function(){
        //     this.reset();
        // });
        // $("#questions").append(newHTML);
        // // $(".modal-overlay").hide();
        // // $(".modal").hide();
      }
    });
  });
})
