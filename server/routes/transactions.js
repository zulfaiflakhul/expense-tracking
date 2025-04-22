const express = require("express");
const router = express.Router();
const controller = require("../controllers/transactionController");

router.get("/", controller.getAllTransactions);
router.post("/", controller.createTransaction);
router.delete("/:id", controller.deleteTransaction);

module.exports = router;
