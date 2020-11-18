'use strict';

const router = require('express').Router();
const user = require('./controllers/users');
const beer = require('./controllers/beers');

router.get('/beers', beer.getBeers);
router.post('/beers', beer.postBeers);
router.post('/reviews', beer.postReviews);
router.get('/reviews', beer.getReviews);
module.exports = router;
