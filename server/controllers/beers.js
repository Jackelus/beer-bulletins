const db = require('../models');

exports.getBeers = async (req, res) => {
  try {
    const beers = await db.Beer.findAll();
    res.send(beers);
    res.status();
  } catch (e) {
    console.log('e', e); // eslint-disable-line no-console
    res.status(500);
  }
};

exports.postBeers = async (req, res) => {
  const beersBody = req.body;
  try {
    const newBeers = await db.Beer.bulkCreate(beersBody, { returning: true });
    res.status(201);
    res.send(newBeers);
  } catch (e) {
    console.log('e', e); // eslint-disable-line no-console
    res.status(500);
  }
};

exports.postReviews = async (req, res) => {
  const reviewsBody = req.body;
  try {
    await db.Reviews.create({
      rating: reviewsBody.rating,
      review: reviewsBody.review,
      beerId: reviewsBody.beerId,
    });
    res.send(reviewsBody);
    res.status(201);
  } catch (e) {
    console.log('e', e); // eslint-disable-line no-console
    res.status(500);
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await db.Reviews.findAll();
    res.send(reviews);
    res.status();
  } catch (e) {
    console.log('e', e); // eslint-disable-line no-console
    res.status(500);
  }
};
