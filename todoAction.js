exports.todoAction = async function (interaction) {
  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
};
