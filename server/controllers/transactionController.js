const { Transaction } = require("../models");

exports.getAllTransactions = async (req, res) => {
  const transactions = await Transaction.findAll({ order: [["date", "DESC"]] });
  res.json(transactions);
};

exports.createTransaction = async (req, res) => {
  const { type, category, amount, date } = req.body;
  const transaction = await Transaction.create({ type, category, amount, date });
  res.status(201).json(transaction);
};

exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;
  await Transaction.destroy({ where: { id } });
  res.json({ message: "Transaction deleted" });
};
