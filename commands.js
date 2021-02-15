const nome = require("./commands/changeName");
const cargo = require("./commands/roles");
const test = require("./commands/test");

const commands = { nome, cargo, test };

module.exports = (message) => {
  const tokens = message.content.split(" ");
  const command = tokens.shift().substring(1);

  commands[command](message, tokens);
};
