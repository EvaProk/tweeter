$(document).ready(function() {
  console.log("I'm ready")
  

  $('#tweet-text').on("keyup", () => {
    const max = 140;
    let length = $('#tweet-text').val().length;
    let chars = max - length;
    $('#charNum').text(chars);
    

    if (length >= max) {
      $('#charNum').css("color", "red");
    }else{
      $('#charNum').css("color", "#545149" )
    }
  });
});