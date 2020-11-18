'use strict';

module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define('Reviews', {
    review: DataTypes.TEXT,
    rating: DataTypes.TEXT,
    beerId: DataTypes.INTEGER,
  });

  reviews.associate = (model) => {
    reviews.belongsTo(model.Beer, { through: 'BeerReviews' });
  };
  return reviews;
};
