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
  //   (ch) => ch.name === "bot-testing"
  // );

  // console.log(
  //   await channel.messages.fetch(ID).then((message) => message.content)
  // );

  // message.channel
  //   .send(firstYear)
  //   .then((embedMessage) => embedMessage.react("😀"));
  // message.channel.send(secondYear);
  message.channel.send(thirdYear);
  message.channel.send(forthYear);
};
