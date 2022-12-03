const express = require("express");
const router = express.Router();

const Quote = require("../models/quotes");

router.get("/", async (req, res, next) => {
  const { limit } = req.query;

  try {
    const queryOptions = limit ? { limit } : {};
    const quotes = await Quote.find({}, null, queryOptions);
    res.json(quotes);
  } catch (err) {
    next(err);
  }
});

router.get("/random-quote", async (req, res, next) => {
  try {
    const quote = await Quote.aggregate([{ $sample: { size: 1 } }]);
    res.json(quote);
  } catch (error) {
    next(err.code);
  }
});

module.exports = router;
