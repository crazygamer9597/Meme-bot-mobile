const Discord = require('discord.js');
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const api = require("imageapi.js");
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('&meme');

});
 
client.on('message', async msg => {
  if (msg.content === '&meme') {
    let subreddits = [
      "memes",
      "dankmemes",
      "rareinsults"

    ];
    let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
    let img = await api(subreddit)
    const Embed = new Discord.MessageEmbed()
    .setTitle(`A meme from Nihal's bot`)
    .setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
    .setColor('RANDOM')
    .setImage(img)
    msg.channel.send(Embed)
  }
});
 
client.login(process.env.TOKEN);
