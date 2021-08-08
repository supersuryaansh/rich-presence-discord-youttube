const client = require('discord-rich-presence')('873056246142472262');
const express = require('express');
var song = 'Playing YouTube';
var artist = 'Currently Paused';
const apps = express();
var inTime = 'git';
var fiTime = 'hub';
var link = 'https://github.com/supersuryaansh';
console.log('Starting Discord-yt')
update(song,artist);

apps.use(express.json());
apps.post("/", (request, response) => {
  let content = request.body;
  if(content.song == undefined || content.song == null ||inTime == content.timeMax.replace(' ', '') || content.timeMax.replace(' ', '') == '0:00') {
    response.sendStatus(200);
    return;
  }
  

  inTime = content.timeMax.split('/')[0].replace(' ', '');
  fiTime = content.timeMax.split('/')[1].replace(' ', '');
  link = content.url;
  song = content.song;
   console.log('Playing now ' + content.song + ' by ' + content.artist + ' Time: ' + content.timeMax.split('/')[0].replace(' ', '')+content.timeMax.split('/')[1].replace(' ', ''));
  update(content.song, content.artist,inTime,"/"+fiTime,link);
  response.sendStatus(200);
});

apps.listen(3000, () => console.log('Ready Senpai!'));

function update(song,artist,timeNow = "Paused",timeMax="",link = "https://github.com/supersuryaansh/discord-yt") {
  client.updatePresence({
    state: artist,
    details: song,
    largeImageKey: 'ytmusic',
    smallImageKey: 'play',
    instance: true,
    buttons : [{label : timeNow + timeMax,url:link},
    ]
  });
}


