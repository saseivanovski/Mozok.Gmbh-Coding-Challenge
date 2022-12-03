const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const quotesRoutes = require("./routes/quotes");
const fetch = require("./fetchData/fetch");

const Quote = require("./models/quotes");

async function saveQuoteToDb(quote) {
  try {
    await Quote.create(quote);
  } catch (err) {
    console.log(err.message);
  }
  return 0;
}

async function apiToDb() {
  try {
    const data = await fetch();
    data.forEach(async (quote) => {
      await saveQuoteToDb(quote);
    });
  } catch (err) {
    if (err.code === 11000) {
    }
  }
}

mongoose.connect(
  "mongodb+srv://sase:sase@atlascluster.op70typ.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", apiToDb);

app.use(cors());
app.use(express.json());

app.use("/quotes", quotesRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: "Internal server error",
    },
  });
});

module.exports = app;
