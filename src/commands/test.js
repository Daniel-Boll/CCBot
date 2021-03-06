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

  return message.channel.send({
    embed: {
      color: "GREEN",
      description: "Servidor rodando normalmente! 😀🤝",
    },
  });
};
