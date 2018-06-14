'use strict';
import TwitterApi from 'twit';
import Watson from './Watson';
import async from 'async';
class Twitter {
	constructor(){
		this.twitter = new TwitterApi({
			consumer_key: "nVwpnSkx4gNVIqSkSKkWrYL9T",
			consumer_secret: "8ETqxoJqbLOs2kj6KBiZnA1xjE3TNuq7pV3h3lcvMbcfuT90RS",
			access_token: "749339684673822720-OSUxETWucIRGNkyV9NPtnTIGGGKQ7lc",
			access_token_secret: "ZAJj6lXF9YyoxLd7RzET3EVyLCRP6bxwR8EDo661UJ3MK",
			timeout_ms: 60*1000
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
							console.log("ERROR: " + err);
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