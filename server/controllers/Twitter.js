'use strict';
import TwitterApi from 'twit';
import Watson from './Watson';

class Twitter {
	constructor(){
		this.twitter = new TwitterApi({
			consumer_key: process.env.TWITTER_CONSUMER_KEY,
			consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
			access_token: process.env.TWITTER_ACCESS_TOKEN,
			access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
			timeout_ms: 60000
		});
		this.watson;
	}

	init(){
	}

	getTwits(twitterUser, language){
        return new Promise((resolve, reject) => {
            this.twitter.get('statuses/user_timeline', { screen_name: twitterUser , count: 200 }, (err, data, response) => {
                if(err) {
                    reject({status: 500, msg: 'Twitter API Error', err: err});
                } else {
					var responseTwitter = [];
					data.forEach((tweet) => {
						responseTwitter.push(tweet.text);
					});
					if (language !== "en"){
						Watson.translate(responseTwitter.join('. '), language)
						.then((data) => {
							let newJson = {
								"content": data,
								"contenttype": "text/plain",
								"language": "en",
								"id": 1
							};
							resolve({ "contentItems" : [ newJson ] });
						})
						.catch((err) => {
							reject({status: 500, msg: 'Watson Translate Error', err: err});
						});
					}
					else {
						let newJson = {
							"content": responseTwitter.join('. '),
							"contenttype": "text/plain",
							"language": "en",
							"id": 1
						};
						resolve({ "contentItems" : [ newJson ] });
					}
				}
            });
        });
    }        
}

export default new Twitter();