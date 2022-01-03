const Discord = require("discord.js")
require("dotenv").config()


const client = new Discord.Client({   // discord intents etc
	intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	]
})

client.on("ready", () => {  // what to do when on/ready
	console.log('Logged in as NEWjsTEST')
})

//commands

client.on("messageCreate", (message) => {
	if (message.content == "hi js"){
		message.reply("Hi! I exist now :sunglasses:")
	}
})


client.login(process.env.TOKEN) // login to discord / go online