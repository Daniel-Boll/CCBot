const regras = require("./reactions/rules");
const materias = require("./reactions/subject");

const reactions = { regras, materias };

module.exports = (reaction, user, action) => {
  const channel = reaction.message.channel.name;

  if (reactions.hasOwnProperty(channel))
    reactions[channel](reaction, user, action);
};
