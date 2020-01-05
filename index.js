const Discord = require("discord.js");
const Bot = new Discord.Client();
const Prefix = "|";
const Token = "NjYzNTExODczMjAyOTQ2MDY5.XhJmPw.TMoPet3mC9lc_XoMDyGdFbmy76o";

Bot.on("ready", () => {
    Bot.user.setActivity("Moderating...");
});

Bot.on("message", message => {
    if (message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
    {
        if (message.content.startsWith(Prefix + "warn"))
        {
            const Id = message.content.split(" ")[1];
            const Msg = message.content.substring(6 + Id.length);

            const Embed = new Discord.RichEmbed()
                .setColor("#0099ff")
                .setDescription("You are being warned for: " + Msg)
                .setTimestamp()
            message.guild.members.get(Id).sendMessage(Embed);
        }
    }
    else
    {
        const Embed = new Discord.RichEmbed()
            .setColor("#0099ff")
            .setDescription("<@" + message.author.id + "> You Are Not An Admin.")
            .setTimestamp()
        message.channel.send(Embed);
    }
});

Bot.login(Token);
