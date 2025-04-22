const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./models");
const transactionRoutes = require("./routes/transactions");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/transactions", transactionRoutes);

db.sequelize.sync().then(() => {
  console.log("Database synced");
});

module.exports = app;
