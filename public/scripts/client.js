
$(() => {
  // $("time.timeago").timeago();
  // jQuery(document).ready(function() {
  //   jQuery("time.timeago").timeago();
  // });
  

  // const tweetData = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]

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

// const $tweet = renderTweets(tweetData);
//   $('.new-tweet').append($tweet); 

  
const $form = $('#new-tweet');
  $form.on('submit', function(event) {
    event.preventDefault();
    console.log('the form has been submitted')
    

    const serializedData = $(this).serialize() 
    console.log(serializedData);
    if(serializedData.content.text === null){
      alert("Fill in the form")
    }

    $.post('/tweets', serializedData, (response) => {
      console.log(response)
      loadTweets();
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



// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227  
// }




});


