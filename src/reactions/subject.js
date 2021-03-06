const {
  firstYearEmbedMessageId,
  secondYearEmbedMessageId,
  thirdYearEmbedMessageId,
  forthYearEmbedMessageId,
} = require("../constants/subjects");
const {
  firstYearEquivalent,
  secondYearEquivalent,
  thirdYearEquivalent,
  forthYearEquivalent,
} = require("../constants/equivalence");

const changeInChannel = (subject, reaction, user, action) => {
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
};

const firstYearHandle = (reaction, user, action) => {
  const possible = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣"];
  possible.map((option) => {
    if (reaction._emoji.name == option) {
      changeInChannel(firstYearEquivalent[option], reaction, user, action);
    }
  });
};

const secondYearHandle = (reaction, user, action) => {
  const possible = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣"];
  possible.map((option) => {
    if (reaction._emoji.name == option) {
      changeInChannel(secondYearEquivalent[option], reaction, user, action);
    }
  });
};

const thirdYearHandle = (reaction, user, action) => {
  const possible = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"];
  possible.map((option) => {
    if (reaction._emoji.name == option) {
      changeInChannel(thirdYearEquivalent[option], reaction, user, action);
    }
  });
};

const forthYearHandle = (reaction, user, action) => {
  const possible = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣"];
  possible.map((option) => {
    if (reaction._emoji.name == option) {
      changeInChannel(forthYearEquivalent[option], reaction, user, action);
    }
  });
};

module.exports = (reaction, user, action) => {
  if (reaction.message.id == firstYearEmbedMessageId) {
    firstYearHandle(reaction, user, action);
  } else if (reaction.message.id == secondYearEmbedMessageId) {
    secondYearHandle(reaction, user, action);
  } else if (reaction.message.id == thirdYearEmbedMessageId) {
    thirdYearHandle(reaction, user, action);
  } else if (reaction.message.id == forthYearEmbedMessageId) {
    forthYearHandle(reaction, user, action);
  }

  // if (reaction._emoji.name == "✅") {
  //   const subject = reaction.message.content;
  //   const textChannel = reaction.message.channel.guild.channels.cache.filter(
  //     (channel) => channel.type == "text" && channel.name == subject
  //   );
  //   const voiceChannel = reaction.message.channel.guild.channels.cache.filter(
  //     (channel) => channel.type == "voice" && channel.name == subject
  //   );
  //   const view_channel = action == "add" ? true : false;
  //   textChannel.map((permission) =>
  //     permission.updateOverwrite(user.id, { VIEW_CHANNEL: view_channel })
  //   );
  //   voiceChannel.map((permission) =>
  //     permission.updateOverwrite(user.id, { VIEW_CHANNEL: view_channel })
  //   );
  // }
};
