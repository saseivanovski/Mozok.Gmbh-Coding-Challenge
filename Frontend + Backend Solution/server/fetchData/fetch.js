const fetch = require("node-fetch");

async function getRequest() {
  try {
    const res = await fetch("https://type.fit/api/quotes");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

module.exports = getRequest;
