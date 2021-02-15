module.exports = (reaction, user, _) => {
  if (reaction._emoji.name == "✅") {
    const channel = reaction.message.channel.guild.channels.cache.filter(
      (channel) => channel.type == "text" && channel.name == "autenticação"
    );

    channel.map((permission) =>
      permission.updateOverwrite(user.id, { VIEW_CHANNEL: true })
    );
  }
};
