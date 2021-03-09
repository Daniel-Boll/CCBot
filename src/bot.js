require("core-js/stable");
require("regenerator-runtime/runtime");
require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const commandHandler = require("./commands");
const reactionHandler = require("./reactions");

client.login(process.env.BOT_TOKEN);

client.on("message", (message) => {
  if (message.content.startsWith("!")) {
    commandHandler(message);
  }
});

client.on("messageReactionAdd", async (reaction, user) => {
  // When we receive a reaction we check if the reaction is partial or not
  if (reaction.partial) {
    // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
    try {
      await reaction.fetch();
    } catch (error) {
      console.error("Something went wrong when fetching the message: ", error);
      // Return as `reaction.message.author` may be undefined/null
      return;
    }
  }
  reactionHandler(reaction, user, "add");
});

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error("Something went wrong when fetching the message: ", error);
      return;
    }
  }
  reactionHandler(reaction, user, "remove");
});
