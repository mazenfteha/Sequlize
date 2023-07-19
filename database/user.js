const { DataTypes } = require('sequelize');

const { db } = require('./connection')

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
lastName: {
    type: DataTypes.STRING,
    allowNull: false
}
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true

module.exports = User;