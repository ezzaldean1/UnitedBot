const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

  console.log('---------------');

  console.log(' Mo3 Bot Is Online')

  console.log('---------------')

  client.user.setStatus("Online")

    client.user.setActivity(" United Server ",{type: 'WATCHING'})

});

            var prefix = "-" ;

            

            

            

            const adminprefix = "-";//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

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

            

            client.on ("guildMemberAdd", member => {

  

   var role = member.guild.roles.find ("name", "United");

   member.addRole (role);

  

})

client.on ("guildMemberRemove", member => {

   

})

const fs = require('fs');

const moment = require('moment');

const jimp = require('jimp');

const Canvas = require('canvas');

 

client.on('guildMemberAdd', member => {

     const welcomer =  member.guild.channels.find('name', 'united');

const w = ['./w1.png'];

 

         let Image = Canvas.Image,

            canvas = new Canvas(400, 200),

            ctx = canvas.getContext('2d');

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {

            if (err) return console.log(err);

            let BG = Canvas.Image;

            let ground = new Image;

            ground.src = Background;

            ctx.drawImage(ground, 0, 0, 400, 200);

             

         

 

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;

                jimp.read(url, (err, ava) => {

                    if (err) return console.log(err);

                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {

                        if (err) return console.log(err);

                       

                        ctx.font = "bold 12px Arial";

                        ctx.fontSize = '20px';

                        ctx.fillStyle = "#f1f1f1";

                        ctx.textAlign = "center";

                        ctx.fillText(`welcome to server`, 300, 130);

                       

                        ctx.font = "bold 12px Arial";

                        ctx.fontSize = '20px';

                        ctx.fillStyle = "#f1f1f1";

                        ctx.textAlign = "center";

                        ctx.fillText(member.user.username, 200, 150);

 

                let Avatar = Canvas.Image;

                              let ava = new Avatar;

                              ava.src = buf;

                              ctx.beginPath();

                              ctx.arc(77, 101, 62, 0, Math.PI*2);

                              ctx.stroke();

                                 ctx.clip();

                                 ctx.drawImage(ava, 13, 38, 128, 126);  

                         

               

                             

welcomer.sendFile(canvas.toBuffer())

 

 

 

     

     

                    }  )  

     

                   

 

})

      });                    

});

var dat = JSON.parse("{}");

function forEachObject(obj, func) {

    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });

}

client.on("ready", () => {

    var guild;

    while (!guild)

        guild = client.guilds.get("494821106440732673");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            dat[Inv] = Invite.uses;

        });

    });

});

 

 

 

client.on("guildMemberAdd", (member) => {

    let channel = member.guild.channels.get("494821107321405460");

    if (!channel) {

        console.log("!the channel id it's not correct");

        return;

    }

    if (member.id == client.user.id) {

        return;

    }

    console.log('-');

    var guild;

    while (!guild)

        guild = client.guilds.get("494821106440732673");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            if (dat[Inv])

                if (dat[Inv] < Invite.uses) {

                    setTimeout(function() {

 channel.send(`**invited by** ${Invite.inviter} `) ;

                    },1500);

 }

            dat[Inv] = Invite.uses;

       

       });

    });

});

            

            

client.on('message',async message => {

  var time = moment().format('Do MMMM YYYY , hh:mm');

  var room;

  var title;

  var duration;

  var gMembers;

  var currentTime = new Date(),

hours = currentTime.getHours() + 3 ,

minutes = currentTime.getMinutes(),

done = currentTime.getMinutes() + duration / 60000 ,

seconds = currentTime.getSeconds();

if (minutes < 10) {

minutes = "0" + minutes;

}

var suffix = "AM";

if (hours >= 12) {

suffix = "PM";

hours = hours - 12;

}

if (hours == 0) {

hours = 12;

}

  var filter = m => m.author.id === message.author.id;

  if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');

    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {

      message.channel.awaitMessages(filter, {

        max: 1,

        time: 20000,

        errors: ['time']

      }).then(collected => {

        let room = message.guild.channels.find('name' , collected.first().content);

        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');

        room = collected.first().content;

        collected.first().delete();

        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {

          message.channel.awaitMessages(filter, {

            max: 1,

            time: 20000,

            errors: ['time']

          }).then(collected => {

            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');

            duration = collected.first().content * 60000;

            collected.first().delete();

            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {

              message.channel.awaitMessages(filter, {

                max: 1,

                time: 20000,

                errors: ['time']

              }).then(collected => {

                title = collected.first().content;

                collected.first().delete();

                msg.delete();

                message.delete();

                try {

                  let giveEmbed = new Discord.RichEmbed()

                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)

                  .setFooter(message.author.username, message.author.avatarURL);

                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {

                     let re = m.react('🎉');

                     setTimeout(() => {

                       let users = m.reactions.get("🎉").users;

                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);

                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]

                       let endEmbed = new Discord.RichEmbed()

                       .setAuthor(message.author.username, message.author.avatarURL)

                       .setTitle(title)

                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)

                       .setTimestamp()

					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});

					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})

                     },duration);

                   });

                } catch(e) {

                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);

                  console.log(e);

                }

              });

            });

          });

        });

      });

    });

  }

});

client.on("message", message => {

		var args = message.content.split(' ').slice(1); 

	var msg = message.content.toLowerCase();

	if( !message.guild ) return;

	if( !msg.startsWith( prefix + 'role' ) ) return;

	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');

	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){

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

			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');

		} else if( args[0].toLowerCase() == "bots" ){

			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))

			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');

		} else if( args[0].toLowerCase() == "humans" ){

			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))

			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');

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

			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');

		} else if( args[0].toLowerCase() == "bots" ){

			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))

			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');

		} else if( args[0].toLowerCase() == "humans" ){

			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))

			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم إعطاء الشخص رتبة**');

		} 

	} 

});

            

client.on('message' , message => {

  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "send")) {

    let args = message.content.split(" ").slice(1);

    let suggestmessage = args.join(" ").slice(22);

    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {

        return message.reply("Please Mention the channel!")

    }

    if (!suggestmessage) {

        return message.reply("Plase Give Text To send Channel!")

    

         

    }

     message.delete();

suggestchannel.send("@everyone  `||` @here ");

    let embed = new Discord.RichEmbed()

        .addField("**message**", `${suggestmessage}`)

        .setFooter(`by ${message.author.tag}`)

        .setTimestamp()

    suggestchannel.send({

        embed

    }).then(msg => {

        msg.react("✅").then(r => msg.react("❎"))

    });

    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));

    return;

}

});


  
  
        






 

client.on('message', message => {

      if(message.content === prefix + "hchannel") {

      if(!message.channel.guild) return;

      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');

             message.channel.overwritePermissions(message.guild.id, {

             READ_MESSAGES: false

 })

              message.channel.send('Channel Hided Successfully ! ✅  ')

 }

});

client.on('message', message => {

      if(message.content === prefix + "schannel") {

      if(!message.channel.guild) return;

      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');

             message.channel.overwritePermissions(message.guild.id, {

             READ_MESSAGES: true

 })

              message.channel.send('Done  ')

 }

});

client.on('message', message => {

    var prefix = "-"

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

  /*let b5bzlog = client.channels.find("name", "5bz-log");

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

  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')

  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')

  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')

  message.channel.send({

    embed : banembed

  })

}

});

client.on('message', message => {

    var prefix = "-"

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

})

   client.on('message', message => {

       if(message.content === prefix + "mutechannel") {

                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');

              message.channel.overwritePermissions(message.guild.id, {

            SEND_MESSAGES: false

              }).then(() => {

                  message.reply("**__تم تقفيل الشات__ ✅ **")

              });

                }

//FIRE BOT

    if(message.content === prefix + "unmutechannel") {

                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');

              message.channel.overwritePermissions(message.guild.id, {

            SEND_MESSAGES: true

              }).then(() => {

                  message.reply("**__تم فتح الشات__✅**")

              });

    }

       

});

        

     

 

client.on('message', message => {

  if (message.guild) {

 let embed = new Discord.RichEmbed()

  let args = message.content.split(' ').slice(1).join(' ');

if(message.content.split(' ')[0] == prefix + 'bc') {

  if (!args[1]) {

message.channel.send("**^bc <message>**");

return;

}

      message.guild.members.forEach(m => {

 if(!message.member.hasPermission('ADMINISTRATOR')) return;

          var bc = new Discord.RichEmbed()

          .setAuthor(message.author.username, message.author.avatarURL)

          .addField(' The server', `${message.guild.name}`, true)

          .addField(' who sended the messege ', `${message.author.username}!${message.author.discriminator}`, true)

          .addField(' the messege ', args)

          .setThumbnail(message.guild.iconURL)

          .setColor('RANDOM')

          m.send(`${m}`,{embed: bc});

      });

      const unknown = new Discord.RichEmbed()

      .setAuthor(message.author.username, message.author.avatarURL)

      .setTitle('✅| the messege is loading ')

      .addBlankField(true)

      .addField('♨| i got sended to  ', message.guild.memberCount , true)

      .addField('📝| the message ', args)

      .setColor('RANDOM')

      message.channel.sendEmbed(embed);

  }

  } else {

      return;

  }

});

client.on('message', msg => { 

    if (msg.content.startsWith(`-warn`)) {

      if(!msg.member.hasPermission("MANAGE_MESSAGES")) return;

       let args = msg.content.split(" ").slice(1);

      if (!msg.mentions.members.first()) return msg.reply('منشن الشخص المحدد')

      if (!args[0]) return msg.reply('اكتب السبب')

      //غير اسم الروم او سوي روم بذا الاسم 

      if (msg.guild.channels.find('name', 'warns')) {

        //اذا غيرت فوق غير هنا كمان 

        msg.guild.channels.find('name', 'warns').send(`

      تم اعطائك انذار : ${msg.mentions.members.first()}

      لأنك قمت بما يلي

      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}

      `)

      }

    }

})

client.on('message', message => {

  

        if(message.content.startsWith(prefix + 'deafen')) {

      if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {

        return message.reply('**يجب عليك المنشن اولاّ**❌').catch(console.error);

      }

      if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {

        return message.reply('للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**❌').catch(console.error);

      }

     

      const deafenMember = (member) => {

        if (!member || !member.voiceChannel) return;

        if (member.serverDeaf) return message.channel.send(`${member} **لديه ديفن بالفعل**:x:`);

        member.setDeaf(true).catch(console.error);

        if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **❌ ").then(m => m.delete(5000));

      };

     

      message.mentions.users.forEach(user => deafenMember(message.guild.member(user)));

      message.mentions.roles.forEach(role => role.members.forEach(member => deafenMember(member)));

        }

        

    });

client.on('message', async message =>{

  

      if(message.content.startsWith(prefix + 'undeafen')) {

     

    if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {

      return message.reply('**يجب عليك المنشن اولاّ**❌').catch(console.error);

    }

    if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {

      return message.reply('**للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**❌ ').catch(console.error);

      if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **❌ ").then(m => m.delete(5000));

    }

     

    const undeafenMember = (member) => {

      if (!member || !member.voiceChannel) return;

      if (!member.serverDeaf) return message.channel.send(`${member} `);

      member.setDeaf(false).catch(console.error);

    };

     

    message.mentions.users.forEach(user => undeafenMember(message.guild.member(user)));

    message.mentions.roles.forEach(role => role.members.forEach(member => undeafenMember(member)));

    }

    });

client.on('message', message => {

  

        if(message.content.startsWith(prefix + 'mutevoice')) {

          if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));

          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))

           

        if(message.mentions.users.size === 0) {

          return message.reply("Please mention a user to mute.");

        }

        let muteMember = message.guild.member(message.mentions.users.first());

        if(!muteMember) {

          return message.reply("Try again.");

        }

        muteMember.setMute(true);

        if(muteMember) {

          message.channel.sendMessage("User muted successfully.");

        }

      }

    });



    







   





     



        



    

client.on('message', message => {

     if(message.content.startsWith(prefix + "clear")) {

         var args = message.content.split(" ").slice(1);

 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You need MANAGE_MESSAGES permission noob');

  if (!args[0]) return message.channel.send('You didn\'t provide any number!!!');

  message.channel.bulkDelete(args[0]).then(() => {

    const embed = new Discord.RichEmbed()

      .setColor(0xF16104)

      .setDescription(`Cleared ${args[0]} messages.`);

    message.channel.send({ embed });

    const actionlog = message.guild.channels.find('name', 'logs');

    if (!actionlog) return message.channel.send('Can\'t find action-log channel. Are you sure that this channel exists and I have permission to view it? **CANNOT POST LOG.**');

    const embedlog = new Discord.RichEmbed()

      .setDescription('~Purge~')

      .setColor(0xF16104)

      .addField('Purged By', `<@${message.author.id}> with ID ${message.author.id}`)

      .addField('Purged in', message.channel)

      .addField('Time', message.createdAt);

    actionlog.send(embedlog);

   

  });

};

});

client.login(process.env.BOT_TOKEN);
