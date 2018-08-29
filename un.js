const Discord = require('discord.js');
const client = new Discord.Client();
var Canvas = require('canvas')
const moment = require('moment');
const ms = require("ms");
var jimp = require('jimp')
var fs = require("fs");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();

client.on('ready', () => {
  console.log('---------------');
console.log(' United Bot Is Online')
  console.log('---------------')
  client.user.setStatus("Online")
    client.user.setActivity("United Shop ",{type: 'PLAYING'})
});


            var prefix = "";




 client.on('guildMemberAdd',async member => {
  const w = ['/welcome_4 .png'];
        let Image = Canvas.Image,
            canvas = new Canvas(800, 300),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();
 
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 800, 300);
 
})
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                 if (err) return console.log(err);
 
          ctx.font = '36px Arial';
          ctx.fontSize = '72px';
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.fillText(member.user.username, 545, 177);
         
          ctx.font = '16px Arial Bold';
          ctx.fontSize = '72px';
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.fillText(`${member.guild.memberCount} Members`, 580, 200);
         
          let Avatar = Canvas.Image;
          let ava = new Avatar;
          ava.src = buf;
          ctx.beginPath();
          ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(ava, 36, 21, 260, 260);
           
          const c =  client.channels.get("483199215003238400");
          c.sendFile(canvas.toBuffer());
 
});
});
});



client.on("roleCreate", rc => {

  const channel = rc.guild.channels.find("name", "log") //تقدر تغير اسم الشات

  if(channel) {

  var embed = new Discord.RichEmbed()

  .setTitle(rc.guild.name)

  .setDescription(`***Created Role Name : *** **${rc.name}** `)

  .setColor(`RANDOM`)

  .setTimestamp(); 

  channel.sendEmbed(embed)

  }

  });

  //By S Codes

  client.on("roleDelete",  rd => {

  const channel = rd.guild.channels.find("name", "log")

  if(channel) {

  var embed = new Discord.RichEmbed()

  .setTitle(rd.guild.name)

  .setDescription(`***Deleted Role Name : *** **${rd.name}** `)

  .setColor(`RANDOM`)

  .setTimestamp(); 

  channel.sendEmbed(embed)

  }

  });


client.on("channelCreate",  cc => {

  const channel = cc.guild.channels.find("name", "log")

  if(channel) {

  var embed = new Discord.RichEmbed()

  .setTitle(cc.guild.name)

  .setDescription(`***Channel Created Name : *** **${cc.name}** ⬅️`)

  .setColor(`RANDOM`)

  .setTimestamp(); 

  channel.sendEmbed(embed)

  }

  });

   client.on("deleteChannel",  dc => {

  const channel = dc.guild.channels.find("name", "log")

  if(channel) {

  var embed = new Discord.RichEmbed()

  .setTitle(dc.guild.name)

  .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`)

  .setColor(`RANDOM`)

  .setTimestamp(); 

  channel.sendEmbed(embed)

  }

  });

  












       

       

     


                                                                                          

       




  
client.on('guildMemberAdd', member => {

    if (!member || !member.id || !member.guild) return;

    const guild = member.guild;

	    const channel = member.guild.channels.find('name', 'log');

    if (!channel) return;

    let memberavatar = member.user.avatarURL

    const fromNow = moment(member.user.createdTimestamp).fromNow();

    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';

    

    let embed = new Discord.RichEmbed()

       .setAuthor(${member.user.tag}, member.user.avatarURL)

	   .setThumbnail(memberavatar)

       .setColor('GREEN')

       .setDescription(inbox_tray <@${member.user.id}> Joined To The Server\n\n)

       .setTimestampو();

     channel.send({embed:embed});

});

client.on('guildMemberRemove', member => {

    if (!member || !member.id || !member.guild) return;

    const guild = member.guild;

	    const channel = member.guild.channels.find('name', 'log');

    if (!channel) return;

    let memberavatar = member.user.avatarURL

    const fromNow = moment(member.joinedTimestamp).fromNow();

    

    let embed = new Discord.RichEmbed()

       .setAuthor(${member.user.tag}, member.user.avatarURL)

	   .setThumbnail(memberavatar)

       .setColor('RED') 

       .setDescription(:outbox_tray: <@${member.user.id}> Leave From Server\n\n)

       .setTimestamp();

     channel.send({embed:embed});

});
  client.on('messageDelete', message => {

    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;

    const channel = message.guild.channels.find('name', 'log');

    if (!channel) return;

    

    let embed = new Discord.RichEmbed()

       .setAuthor(${message.author.tag}, message.author.avatarURL)

       .setColor('BLACK')

       .setDescription(wastebasket️ حذف رساله

ارسلها <@${message.author.id}>                                                                                                                        تم حذفها في شات <#${message.channel.id}>\n\n `${message.cleanContent}``)

       .setTimestamp();

     channel.send({embed:embed});

});

  client.on('message', message => {
    if(message.content === 'ولكم'){
        message.channel.send('**Welcome To United..**')
    }
});
client.on('message', message => {
    if(message.content === 'حياك'){
        message.channel.send('**Welcome To United:tanabata_tree: ..**')
    }
});

client.on('message', message => {
    if(message.content === 'احبك'){
        message.channel.send('**حبك برص**')
    }
});
client.on('message', message => {
    if(message.content === 'اكرهك'){
        message.channel.send('**من زينك**')
    }
});





client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" ✅    تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**

-${message.guild.name}  Link
**`)
      message.author.sendEmbed(Embed11)
    }
});















client.on("message",function(message) {
    if(message.content.startsWith('uptime')) {
        let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
    
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
  v1.setFooter("# | U Bot  |") 
let norelden = new Discord.RichEmbed()
.setColor('#9b59b6')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("  S Bot |");
  message.channel.send({embed:v1}).then(m => m.edit({embed:norelden}),5000);
}
});







/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/

client.on('message', msg => {

    if (msg.content == 'play') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join();
     }
    }
}
})
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			//by ,$ ReBeL ء , ��#4777 'CODES SERVER'
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
				}
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

			return handleVideo(video, msg, voiceChannel);
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		const embedqu = new Discord.RichEmbed()
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queue.set(msg.guild.id, queueConstruct);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queueConstruct.songs.push(song);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	console.log(serverQueue.songs);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			play(guild, serverQueue.songs[0]);
		})//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		.on('error', error => console.error(error));//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
const adminprefix = "u";//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
const devs = ['470500980342128650'];//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
client.on('message', message => {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    
if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});



  
  

  client.on('message', message => {

    if(message.content === prefix + "mutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__:laughing:ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
 if(message.content === prefix + "unmutechnnel") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__:laughing:ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }



});  
  
  
  
  
  client.on("message", (message) => {
if (message.content.startsWith(prefix + "ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith(prefix + "cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')

}
});


client.on("message", (message) => {
if (message.content.startsWith(prefix + 'delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});












client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "logb");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**USER:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**BY:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**REASON:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});











client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "logb");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});








client.on('message', message => {   
if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "اسكت") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين 

 ${message.author.tag} تمت معاقبتك بواسطة

[ ${reason} ] : السبب

اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين 
`)
.setFooter(`في سيرفر : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}
if (command == "تكلم") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انتا لا تملك صلاحيات").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`تم فك الميوت عنك ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setColor("RANDOM")
  user.send( unmuteembeddm);
}
});








client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله ${args}`)
.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});






client.on("message", message => {
 
    var args = message.content.split(' ').slice(1);
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
    if( msg.toLowerCase().startsWith( prefix + 'rerole' ) ){
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
        }  
    } else {
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
        }
    }
});





 client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})
  
  
  


client.on("message", async message => {
           let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'giveaway')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
    if (message.author.id !== message.guild.owner.id) {     
    message.channel.send('**هادا الامر لصاحب السيرفر فقط**' );
      return;
    }
    const array = [];
    message.guild.members.forEach((member) => {
      array.push(member.user.tag);
    });
    const rand = array[Math.floor(Math.random() * array.length)];
    message.channel.send(rand).then((m) => {
      m.split('#');
      m.edit(array);
    });
      
    };
});






client.on('message', function (message, member) {


			//var mess = message.content.toLowerCase();
			
			if(message.content.startsWith(prefix + 'tweet')) {
			      let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

				var Canvas = require('canvas')
				var jimp = require('jimp')

				var Canvas = require('canvas')
				var jimp = require('jimp')
				
const w = ['./img.png']

        let Image = Canvas.Image,
            canvas = new Canvas(802, 404),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 802, 404);

})



 var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
            getvalueof = mentionned;
          } else {
            getvalueof = message.author;
          }

    ctx.font = '45px Impact';
    //ctx.rotate(.1);
    ctx.fillText(getvalueof.username, 60, 180);
    ctx.fillText('tweets :', 160, 310);
    ctx.fillStyle = 'blue';
    //ctx.drawImage(img, 70, 320)
   // var te = ctx.measureText(message.author.username);
    
        //var img = new Image;
    //img.url = message.author.avatarURL;




                        
                                        let url = message.author.avatarURL.endsWith(".webp") ? message.author.avatarURL.slice(5, -20) + ".png" : message.author.avatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                                //Avatar
                                let Avatar = Canvas.Image;
                                let ava = new Avatar;
                                ava.src = buf;
                                ctx.save();

                                ctx.beginPath();
                                ctx.arc(75, 75, 60, 0, Math.PI*2, true); 
                                ctx.closePath();
                                ctx.clip();
                                ctx.drawImage(ava, 0, 0, 150, 150);
                                ctx.restore();
                                               //wl
                        ctx.font = '35px Arial Bold';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#dadada";
                        ctx.textAlign = "center";
                        ctx.fillText(`@${message.author.username}`, 250, 75);

                      //ur name
                        ctx.font = '35px Arial';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(args.join("  "), 445, 185);


    ctx.beginPath();
    //ctx.lineTo(50, 102);
    //ctx.lineTo(50 + te.width, 102);
    ctx.stroke();


  message.channel.sendFile(canvas.toBuffer());


})
})

}

		});



client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'سحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("لا استخدام الامر اكتب اسحب العضو")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("#000000")
.setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
}
} else {
message.react("❌")
 }}});
 




client.on('ready', () => {

});
/*جميع الح��وق محفوظهه لريبل ولسيرفر كودز
رآح يرسل للأونر تحذير + م يتطلب ملفات سويته لكم داتا مؤقت
سو روم بأسم log 
أو غيره من الكود عشان يرسل هنا التحذير
nvm i 10 
nvm use 10
npm i discord.js
*/
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "logh"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "logh"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "logh"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });






















client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});






client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();

        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x06DF00,
          footer: {

          }
        }}).then(msg => {msg.delete(3000)});
                            }


  });





client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "مسح")) {
                  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();

        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x06DF00,
          footer: {

          }
        }}).then(msg => {msg.delete(3000)});
                            }


  });





      client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });




  client.on('message', async message => {
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  if(message.content.startsWith(prefix + "invites")) {
    if(!args) return message.reply('**حدد اسم دعوة**');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
      var iNv = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField('# - صاحب الدعوة',inv.inviter,true)
      .addField('# - روم الدعوة',inv.channel,true)
      .addField('# - تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('# - تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('# - مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
      .addField('# - الاستخدامات',inv.uses || inv.maxUses,true)
      message.channel.send(iNv);
    });
  }
});
  



	client.on('message', msg => {
  if (msg.content === prefix + 'السلام عليكم') {
    msg.reply('**وعليكم السلام**');
  }
});


	client.on('message', msg => {
  if (msg.content === prefix + 'برب') {
    msg.reply('**لا تتاخر:tanabata_tree: **');
  }
});


   
                        
     




client.on('message', message => {
 if (message.content.startsWith("ترحيب 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***هلا باللي ملك قلبي هلا باللي فداه الروح هلا باللي شغل فكري هلا باللي هواه البوح.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحباً بك عدد ما خطته الأقلام من حروف وبعدد ما أزهر بالأرض زهور مرحباً ممزوجة بعطر الورد ورائحة البخور***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا باللي يجينا هلت الفرحة علينا نشدت الأشواق فينا مرحباً بكم مرحباً.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الي��ا***" ,mentionavatar.username )
  .setDescription('***لو علمت الدار بمن زارها فرحت وأستبشرت ثم باست موضع القدمين وأنشدت بلسان الحال قائلة أهلاً وسهلاً بأهل الجود والكرم.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بك كثر النجوم الساطعة وكثر الورود الفائحة التي تفوح بأزكى العطور وكثر ما تكتب الأقلام من الحروف والعبارات. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***حي الله هذه الوجوه رؤيتها تزيد الأفراح، نسماتها تداوي الجروح، وعبيرها فواح، تنثره الرياح، على القمم في الليل في الصباح***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بكل الضيوف يوم نادى غير عادي مرحبا فوق الألوف ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ت��حيب 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***كل شيء يرحب بك كل شيء يتبسم ويتوهج فرحاً بقدومك كل شيء ينمق عبارات الترحيب ويصوغ كلمات الحب لوجودك كل شيء ينتظر مشارك��تك وقلمك الرائع وأبداعاتك كل شيء يردد حياك الله.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});












client.on('message', message => {
     if(message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "warn") {

        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما معك برمشن MANAGE MESSAGES**");
    let args = message.content.split(" ").slice(1);
                    let reason = message.content.split(" ").slice(2).join(" ");
                if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
        if (!reason) return message.reply("**اكتب سبب التحذير**");

        message.channel.sendMessage(args.join("  "))
        message.delete();


    }

});



client.on('message', message =>{

    if(message.content == "roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
  





client.on('message', async message => {
  if(message.content.startsWith(prefix + "svoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});

  client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });











var x1 = "color 1"
var x2 = "color 2"
var x3 = "color 3"
var x4 = "color 4"
var x5 = "color 5"
var x6 = "color 6"
var x7 = "color 7"
var x8 = "color 8"
var x9 = "color 9"
var x10 = "color 10"
var x11 = "color 11"
var x12 = "color 12"
var x13 = "color 13"
var x14 = "color 14"
var x15 = "color 15"
var x16 = "color 16"
var x17 = "color 17"
var x18 = "color 18"
var x19 = "color 19"
var x20 = "color 20"
var x21 = "color 21"
var x22 = "color 22"
var x23 = "color 23"
var x24 = "color 24"
var x25 = "color 25"
var x26 = "color 26"
var x27 = "color 27"
var x28 = "color 28"
var x29 = "color 29"
var x30 = "color 30"
var x31 = "color 31"
var x32 = "color 32"
var x33 = "color 33"
var x34 = "color 34"
var x35 = "color 35"
var x36 = "color 36"
var x37 = "color 37"
var x38 = "color 38"
var x39 = "color 39"
var x40 = "color 40"
var x41 = "color 41"
var x42 = "color 42"
var x43 = "color 43"
var x44 = "color 44"
var x45 = "color 45"
var x46 = "color 46"
var x47 = "color 47"
var x48 = "color 48"
var x49 = "color 49"
var x50 = "color 50"
client.on('message', message => {
	if (message.content === x1) {
	    if(!message.channel.guild) return;
		message.member.addRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));
message.member.removeRole(message.guild.roles.find("name", "86"));
message.member.removeRole(message.guild.roles.find("name", "87"));
message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

if (message.content === x2) {
    if(!message.channel.guild) return;
	message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.addRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x3) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.addRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x4) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.addRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x5) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.addRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x6) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.addRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x7) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.addRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x8) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.addRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x9) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.addRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x10) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.addRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	
	if (message.content === x11) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
message.member.removeRole(message.guild.roles.find("name", "10"));
	message.member.addRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x12) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
message.member.addRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x13) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
message.member.addRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x14) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
message.member.addRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x15) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
message.member.addRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x16) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
message.member.addRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x17) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
message.member.addRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x18) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
message.member.addRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
		if (message.content === x19) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
message.member.addRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x20) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
message.member.addRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x21) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
message.member.addRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x22) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
message.member.addRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x23) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
message.member.addRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x24) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
message.member.addRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x25) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
message.member.addRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x26) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
message.member.addRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x27) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
message.member.addRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x28) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
message.member.addRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x29) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
message.member.addRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x30) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
message.member.addRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x31) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
message.member.addRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x32) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
message.member.addRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x33) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.addRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x34) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.addRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x35) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.addRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x36) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.addRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x37) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.addRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x38) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.addRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x39) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.addRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x40) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.addRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x41) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.addRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x42) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.addRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x43) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.addRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x44) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.addRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x45) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.addRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x46) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.addRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x47) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.addRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x48) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.addRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x49) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.addRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x50) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.addRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
  if (message.content === 'colors') {
      if (!message.channel.guild) return;
    message.channel.sendFile('http://bl3rbe.net/up/zpmE9Vl.png');
  }
	
});













client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
