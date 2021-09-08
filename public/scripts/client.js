
$(() => {
  // $("time.timeago").timeago();
  // jQuery(document).ready(function() {
  //   jQuery("time.timeago").timeago();
  // });
  

  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const renderTweets = function(tweets) {
 
  const $newTweet = $('.new-tweet');
    for(const tweet of tweets) {
      const $tweet = createTweetElement(tweet);

      $newTweet.append($tweet)
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

const $tweet = renderTweets(tweetData);
  $('.new-tweet').append($tweet); 




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


