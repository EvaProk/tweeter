
$(() => {

  $(".errorMessage").hide(); // Hides the errorMessage Div

  const renderTweets = function(tweets) {
    const $newTweet = $('.userTweets');
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);

      $newTweet.prepend($tweet);
    }
  };



  const createTweetElement = (data) => {
    return `<article class ="tweets-container">
  <header class="userInfo">
      <img class="photo" src="${data.user.avatars} ">
      <div class="userName">
      <span class="userN">${data.user.name} </span>
      <span class="nickName">${data.user.handle} </span>
    </div>
  </header>

  <div class="mainContent">
    <p> ${escape(data.content.text)} </p>
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

</article>`;

  };

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };




  const $form = $('#new-tweet');
  $form.on('submit', function(event) {
    event.preventDefault();

    if ($('#tweet-text').val() == "") {   // Checks if the form is empty, or not too long
      $(".errorMessage").slideDown();
      $(".errorText").text("Empty");
      return;
    } else if ($('#tweet-text').val().length >= 140) {
      $(".errorMessage").slideDown();
      $(".errorText").text("Too long");
      return;
    } else {
      $(".errorMessage").hide();
    }

    const serializedData = $(this).serialize();
    console.log(serializedData);

    $.post('/tweets', serializedData, (response) => {
      console.log(response);

      loadTweets();

      $(this)[0].reset(); // cleans the form after submission
      $("#charNum").text(140); // resets the count number

    });

  });



  const loadTweets = () => {

    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: (tweets) => {
        console.log("tweets", tweets);

        renderTweets(tweets);

      },
      error: (err) => {
        console.log(`errro: ${err}`);
      }
    });
  };

  loadTweets();

});


