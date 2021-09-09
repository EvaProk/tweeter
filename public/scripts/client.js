
$(() => {
  

const renderTweets = function(tweets) {
  const $newTweet = $('.userTweets');
  //$newTweet.empty();
    for(const tweet of tweets) {
      const $tweet = createTweetElement(tweet);

      $newTweet.prepend($tweet)
    }
}

 
  
const createTweetElement = (data) =>{
  return `<article class ="tweets-container">
  <header class="userInfo">
      <img class="photo" src="${data.user.avatars} ">
      <div class="userName">
      <span class="userN">${data.user.name} </span>
      <span class="nickName">${data.user.handle} </span>
    </div>
  </header>

  <div class="mainContent">
    <p> ${data.content.text} </p>
    <hr>
  </div>

  <footer class="tweetFooter">
    <span class="date">${timeago.format(data.created_at)}</span>
    <div> 
      <i class="fas fa-flag"></i>
      <i class="fas fa-heart"></i>
      <i class="fas fa-retweet"></i>
    </div> 
  </footer>

</article>`

}



  
const $form = $('#new-tweet');
  $form.on('submit', function(event) {
    event.preventDefault();
    console.log('the form has been submitted')
    if($('#tweet-text').val() == ""){   // Checks if the form is empty, or not too long
        alert("empty");
        return
      } else if($('#tweet-text').val().length >= 140){
        alert("too many characters")
        return
      }

    const serializedData = $(this).serialize() 
    console.log(serializedData);
    // Validation form???? 
    
    $.post('/tweets', serializedData, (response) => {
      console.log(response)
      
      loadTweets();
      $(this)[0].reset(); // cleans the form after submission
    })

  })

  

  const loadTweets = () => {

    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: (tweets) => {
        console.log("tweets", tweets)
  
        renderTweets(tweets);
  
      },
      error: (err) => {
        console.log(`errro: ${err}`)
      }
    })
  }

  renderTweets();






});


