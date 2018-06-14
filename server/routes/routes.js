'use strict';

import Watson from '../controllers/Watson';
import Twitter from '../controllers/Twitter';
import express from 'express';

const app = express();
const port = 3000;
const ENV = process.env.NODE_ENV || 'dev';

app.get('/:user/:language', (req, res) => {
	Twitter.getTwits(req.params.user, req.params.language)
		.then((data) => {
			Watson.getPersonality(data)
				.then((data) => {
					res.json(data);
				})
				.catch((err) => next(err));
		})
		.catch((err) => next(err));
});

app.listen(port, () => console.log(`Running on port ${port}`));
