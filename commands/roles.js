const white_list = ["263061449553739776", "445363126309748747"];

module.exports = async (message, tokens) => {
  /**
   * [0] - (+, -) Adicionar ou remover cargo
   * [1] - (Aluno, Moderador, ...) Nome do cargo
   * [2] - (ID) ID da pessoa a aplicar isso "opcional"
   */

  if (white_list.includes(message.author.id)) {
    const [action, goalRole] = tokens;

    const role = message.guild.roles.cache.filter(
      (role) => role.name == goalRole
    );

    let user =
      message.mentions.users.first().id != undefined
        ? await message.guild.members.fetch(message.mentions.users.first().id)
        : await message.guild.members.fetch(message.author.id);

    action == "+" ? user.roles.add(role) : user.roles.remove(role);
  } else {
    return message.channel.send({
      embed: {
        color: "RED",
        description: `Você não tem acesso a esse comando!`,
      },
    });
  }
};
