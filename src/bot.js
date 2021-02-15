const Discord = require("discord.js");
const client = new Discord.Client();

const commandHandler = require("./commands");
const reactionHandler = require("./reactions");

require("dotenv").config();

module.exports.awake = () => {
  client.login(process.env.BOT_TOKEN);

  client.on("message", (message) => {
    if (message.content.startsWith("!")) {
      commandHandler(message);
    }
  });

  client.on("messageReactionAdd", (reaction, user) => {
    reactionHandler(reaction, user, "add");
  });

  client.on("messageReactionRemove", (reaction, user) => {
    reactionHandler(reaction, user, "remove");
  });
};
