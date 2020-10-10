const Twitter = require('twitter-lite');

require('dotenv').config();

console.log('twitter bot running!');

const client = new Twitter({
  subdomain: "api",
  version: "1.1",
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// client
//   .get("account/verify_credentials")
//   .then(results => {
//     console.log("results", results);
//   })
//   .catch(console.error);

async function tweet(message) {
  const tweet = await client.post("statuses/update", {
    status: message,
  });
}

tweet('Hello twitter! ' + Math.random());
