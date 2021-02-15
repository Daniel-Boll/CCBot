module.exports = (message, tokens) => {
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
      color: "RED",
      description: `Procurando o que, amigo?`,
    },
  });
};
