const channels = require("../../channels.json");

module.exports = async (message, tokens) => {
  if (message.channel.id == channels.auth) {
    const nick = tokens.join(" ");
    const user_id = message.author.id;

    const errorHandler = (err) =>
      message.channel.send({
        embed: { color: "RED", description: `Erro: ${err}` },
      });

    const setNick = (member) => {
      member.setNickname(nick).catch(errorHandler);
    };

    message.guild.members.fetch(user_id).then(setNick);

    // ------------- Adicionar cargo ----------------
    const role = message.guild.roles.cache.filter(
      (role) => role.name == "Aluno"
    );
    message.member.roles.add(role);

    message.react("👌");
    message.react("😍");

    return message.channel.send({
      embed: {
        color: "GREEN",
        description: `Alterado com sucesso o apelido para **${nick}** 😍`,
      },
    });
  } else {
    return message.channel.send({
      embed: {
        color: "RED",
        description: `Para utilizar esse comando vá ao canal <#${channels.auth}>`,
      },
    });
  }
};
