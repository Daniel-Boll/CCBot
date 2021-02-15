const express = require("express");
const bot = require("./bot");

require("core-js/stable");
require("regenerator-runtime/runtime");

const app = express();

bot.awake();

app.get("/", (_, res) => {
  res.status(200).json({
    message: "Discord bot working!",
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening to port 3000");
});
