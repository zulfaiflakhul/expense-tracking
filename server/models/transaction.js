const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Transaction = sequelize.define("Transaction", {
  type: {
    type: DataTypes.ENUM("income", "expense"),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = Transaction;
