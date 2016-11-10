$(document).ready(function(){
  showAll()
})

function showAll(){
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
        </tr>
        `
      }
      $('#body_table').append(data_HTML)
    }
  })
}
