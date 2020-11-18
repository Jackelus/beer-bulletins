'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  user.associate = (model) => {
    user.belongsToMany(model.Beer, { through: 'UserBeers' });
  };
  return user;
};
