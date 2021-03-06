const { MessageEmbed } = require("discord.js");

module.exports.firstYearEmbedMessageId = 817808167298924594;
module.exports.secondYearEmbedMessageId = 817808171174985739;
module.exports.thirdYearEmbedMessageId = 817808172814827520;
module.exports.forthYearEmbedMessageId = 817808173888176225;

module.exports.firstYear = new MessageEmbed()
  .setColor("#0099ff")
  .setTitle("1° ano")
  .setAuthor("CCBot")
  .setDescription("Escolha uma matéria do primeiro ano")
  .addFields(
    { name: "Algoritmos", value: "0️⃣", inline: true },
    {
      name: "Cálculo Diferencial e Integral",
      value: "1️⃣",
      inline: true,
    },
    {
      name: "Lógica e Matemática Discreta",
      value: "2️⃣",
      inline: true,
    },
    {
      name: "Introdução à Ciência da Computação",
      value: "3️⃣",
      inline: true,
    },
    {
      name: "Sistemas Digitais",
      value: "4️⃣",
      inline: true,
    },
    { name: "Estatística", value: "5️⃣", inline: true },
    {
      name: "Geometria Analítica e Álgebra Linear",
      value: "6️⃣",
      inline: true,
    },
    {
      name: "Computação e Sociedade",
      value: "7️⃣",
      inline: true,
    }
  )
  .setFooter(
    "O canal será liberado assim que reagir ao valor correspondente da matéria"
  );

module.exports.secondYear = new MessageEmbed()
  .setColor("#0099ff")
  .setTitle("2° ano")
  .setAuthor("CCBot")
  .setDescription("Escolha uma matéria do segundo ano")
  .addFields(
    {
      name: "Sistemas Digitais",
      value: "0️⃣",
      inline: true,
    },
    {
      name: "Cálculo Númerico e Computacional",
      value: "1️⃣",
      inline: true,
    },
    {
      name: "Teoria da Computação",
      value: "2️⃣",
      inline: true,
    },
    {
      name: "Pesquisa Operacional",
      value: "3️⃣",
      inline: true,
    },
    {
      name: "Linguagem de Montagem",
      value: "4️⃣",
      inline: true,
    },
    {
      name: "Processos de Engenharia de Software I",
      value: "5️⃣",
      inline: true,
    },
    {
      name: "Estrutura de Dados",
      value: "6️⃣",
      inline: true,
    }
  )
  .setFooter(
    "O canal será liberado assim que reagir ao valor correspondente da matéria"
  );

module.exports.thirdYear = new MessageEmbed()
  .setColor("#0099ff")
  .setTitle("3° ano")
  .setAuthor("CCBot")
  .setDescription("Escolha uma matéria do terceiro ano")
  .addFields(
    {
      name: "Sistemas Operacionais",
      value: "0️⃣",
      inline: true,
    },
    {
      name: "Processos de Engenharia de Software II",
      value: "1️⃣",
      inline: true,
    },
    {
      name: "Computação Gráfica",
      value: "2️⃣",
      inline: true,
    },
    {
      name: "Inteligência Artificial",
      value: "3️⃣",
      inline: true,
    },
    {
      name: "Banco de Dados",
      value: "4️⃣",
      inline: true,
    },
    {
      name: "Organização e Arquitetura de Computadores",
      value: "5️⃣",
      inline: true,
    },
    {
      name: "Tecnologias para Desenvolvimento de Sistemas",
      value: "6️⃣",
      inline: true,
    },
    {
      name: "Linguagens de Programação",
      value: "7️⃣",
      inline: true,
    }
  )
  .setFooter(
    "O canal será liberado assim que reagir ao valor correspondente da matéria"
  );

module.exports.forthYear = new MessageEmbed()
  .setColor("#0099ff")
  .setTitle("4° ano")
  .setAuthor("CCBot")
  .setDescription("Escolha uma matéria do quarto ano")
  .addFields(
    {
      name: "Formação de Empreendedores",
      value: "0️⃣",
      inline: true,
    },
    {
      name: "Projeto e Análise de Algoritmos",
      value: "1️⃣",
      inline: true,
    },
    {
      name: "Sistemas Administrativos",
      value: "2️⃣",
      inline: true,
    },
    {
      name: "Redes de Computadores",
      value: "3️⃣",
      inline: true,
    },
    {
      name: "Compiladores",
      value: "4️⃣",
      inline: true,
    },
    {
      name: "Processo de Imagens Digitais",
      value: "5️⃣",
      inline: true,
    },
    {
      name: "Trabalho de Conclusão de Curso",
      value: "6️⃣",
      inline: true,
    }
  )
  .setFooter(
    "O canal será liberado assim que reagir ao valor correspondente da matéria"
  );
