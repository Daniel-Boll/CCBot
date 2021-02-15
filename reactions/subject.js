module.exports = (reaction, user, action) => {
  if (reaction._emoji.name == "✅") {
    const subject = reaction.message.content;

    const textChannel = reaction.message.channel.guild.channels.cache.filter(
      (channel) => channel.type == "text" && channel.name == subject
    );

    const voiceChannel = reaction.message.channel.guild.channels.cache.filter(
      (channel) => channel.type == "voice" && channel.name == subject
    );

    const view_channel = action == "add" ? true : false;

    textChannel.map((permission) =>
      permission.updateOverwrite(user.id, { VIEW_CHANNEL: view_channel })
    );

    voiceChannel.map((permission) =>
      permission.updateOverwrite(user.id, { VIEW_CHANNEL: view_channel })
    );
  }
};
