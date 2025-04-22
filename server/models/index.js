const sequelize = require("../config/database");
const Transaction = require("./transaction");

const db = {};
db.sequelize = sequelize;
db.Transaction = Transaction;

module.exports = db;
