const Discord = require('discord.js');
const client = new Discord.Client();
const set = require('./set.json');
client.login(set.token);
client.on("ready", () => {client.user.setPresence({game: {name: `clerance`,type: "LISTENING"},status: "invisible"});});
const { Slash } = require('discord-slash-commands');
const slash = new Slash(client);
const disbut = require('discord-buttons');
disbut(client);
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
  let berk1 = ["3","2","1","4","5","6","7"]
let clerance2 = berk1[Math.floor(Math.random() * berk1.length)]
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
