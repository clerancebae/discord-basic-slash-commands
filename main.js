const Discord = require('discord.js');
const client = new Discord.Client();
const set = require('./set.json');
client.login(set.token);
client.on("ready", () => {client.user.setPresence({game: {name: `clerance`,type: "LISTENING"},status: "invisible"});});
const { Slash } = require('discord-slash-commands');
const slash = new Slash(client);
client.on("ready", () => {
    console.log("Ready");
    slash.command({
        guildOnly: true,
        guildID: "799312679994261504",
        data: {
            name: "ping",
            description: "Ping pong?",
            type: 4,
            content: `Pong! \`${client.ws.ping}ms\``
        }
    })
})

client.on("ready", () => {
  let berke1 = ["3","2","1","4","5","6","7"]
let clerance2 = berke1[Math.floor(Math.random() * berke1.length)]
    console.log("Ready");
    slash.command({
        guildOnly: true,
        guildID: "799312679994261504",
        data: {
            name: "test",
            description: "",
            type: 4,
            content: `${clerance2}`
        }
    })
})
