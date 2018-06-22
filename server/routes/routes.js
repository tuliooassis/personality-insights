'use strict';

import Watson from '../controllers/Watson';
import Twitter from '../controllers/Twitter';
import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'dev';

app.use(cors());
app.use(express.static(path.join(__dirname, '../../client/dist/client/')));

app.get('/api/:user/:language', (req, res) => {
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

app.all('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../client/dist/client/index.html'));
});
    

app.listen(port, () => console.log(`Running on port ${port}`));
