# Tweeter Project
Tweeter is a simple, single-page Twitter clone created  using HTML, CSS, JS, jQuery and AJAX. The app contains a form for submitting tweets, which itself contains:
- a textarea for new tweet content
- a left-aligned button for submitting new tweets
- contains a Character Counter, right-aligned, which by default shows 140 characters.
Contains a ist of Tweets that displays tweets in reverse-chronological order . 
Individual Tweets have a:
 1. Header, which contains the user's:
     - avatar, on the left
     - name, on the left and after the avatar
     - handle, on the right
     - body, which contains the tweet text
     - footer, which displays:
     - how long ago the tweet was created, on the left
     - "Flag", "Re-tweet" and "Like" action icons on the right. (When the user hovers over an icon  the icon changes colour.)
 2. Character Counter
When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)

3. The Character Counter turns red when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)

4. Compose Tweet
When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed

5. When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)

6. The design of the App is adapted to Mobile and Large screens.

## Final Product
!["Main Page(Large Screen)"](https://github.com/EvaProk/tweeter/blob/master/docs/largeScreen.png)
!["Main Page(Small Screen)"](https://github.com/EvaProk/tweeter/blob/master/docs/smallScreen.png)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- body-parser
- chance
- express
- md5
- timeago.js
