'use strict';
import PersonalityInsightsV3 from 'watson-developer-cloud/personality-insights/v3';
import LanguageTranslatorV3 from 'watson-developer-cloud/language-translator/v3';

class Watson{
    constructor(){
		this.personalityInsights = new PersonalityInsightsV3({
			version: '2017-10-13',
			username: 'd157521e-e611-4c42-87f9-ee704522175a',
			password: '3aWr2jfSfLmW'
		});

		this.languageTranslator = new LanguageTranslatorV3({
			version: '2018-05-01',
			username: 'aba1ccfb-b6dc-47cc-9261-4f64de9c9c21',
			password: '4Y8ttUN2uU74'
		  });
    }

    init(){
    }

    getPersonality(content){
		const profileParams = {
			content: content,
			content_type: 'application/json',
			consumption_preferences: true,
			raw_scores: true
        };
        
        return new Promise((resolve, reject) => {
            this.personalityInsights.profile(profileParams, (err, data) => {
                if(err){
                    reject({ msg:'Internal Error - Watson cannot get profile', status: 500, err: err })
                } else {
                    resolve(data);
                }
            });
        });
	}
	
	translate(text, language){
        var params = {
            text: text,
            model_id: `${language}-en`
        };

        return new Promise((resolve, reject) => {
            this.languageTranslator.translate(params, (err, response) => {
                if (err) reject(err);
                else resolve(response.translations[0].translation);
            });
        });
    }
}

export default new Watson();