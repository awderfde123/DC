const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require("dotenv").config();
var Action = require("./todoAction");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    activities: [{ name: "電腦" }],
    status: "online",
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  Action.todoAction(interaction);

  // if (interaction.commandName === "ping") {
  //   await interaction.reply("Pong!");
  // }
});

client.login(process.env.TOKEN);
