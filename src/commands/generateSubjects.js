const {
  firstYear,
  secondYear,
  thirdYear,
  forthYear,
} = require("../constants/subjects");

module.exports = async (message, tokens) => {
  /*
                 (__) 
                 (oo) 
           /------\/  
          / |    ||   
         *  /\---/\   
            ~~   ~~   
..."Have you mooed today?"...
  */

  // const ID = 817783042100691005;

  // const channel = message.channel.guild.channels.cache.find(
  //   (ch) => ch.name === "materias"
  // );

  message.channel.send(firstYear).then(async (embedMessage) => {
    try {
      await embedMessage.react("0️⃣");
      await embedMessage.react("1️⃣");
      await embedMessage.react("2️⃣");
      await embedMessage.react("3️⃣");
      await embedMessage.react("4️⃣");
      await embedMessage.react("5️⃣");
      await embedMessage.react("6️⃣");
      await embedMessage.react("7️⃣");
    } catch (error) {
      console.error("One of the emojis failed to react.");
    }
  });

  message.channel.send(secondYear).then(async (embedMessage) => {
    try {
      await embedMessage.react("0️⃣");
      await embedMessage.react("1️⃣");
      await embedMessage.react("2️⃣");
      await embedMessage.react("3️⃣");
      await embedMessage.react("4️⃣");
      await embedMessage.react("5️⃣");
      await embedMessage.react("6️⃣");
    } catch (error) {
      console.error("One of the emojis failed to react.");
    }
  });

  message.channel.send(thirdYear).then(async (embedMessage) => {
    try {
      await embedMessage.react("0️⃣");
      await embedMessage.react("1️⃣");
      await embedMessage.react("2️⃣");
      await embedMessage.react("3️⃣");
      await embedMessage.react("4️⃣");
      await embedMessage.react("5️⃣");
      await embedMessage.react("6️⃣");
      await embedMessage.react("7️⃣");
    } catch (error) {
      console.error("One of the emojis failed to react.");
    }
  });

  message.channel.send(forthYear).then(async (embedMessage) => {
    try {
      await embedMessage.react("0️⃣");
      await embedMessage.react("1️⃣");
      await embedMessage.react("2️⃣");
      await embedMessage.react("3️⃣");
      await embedMessage.react("4️⃣");
      await embedMessage.react("5️⃣");
      await embedMessage.react("6️⃣");
    } catch (error) {
      console.error("One of the emojis failed to react.");
    }
  });
};
