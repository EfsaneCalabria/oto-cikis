client.on('ready', () => {  
  client.guilds.cache.forEach((guild) => {
    guild.leave()
      .then((GuildLeft) => console.log(`${GuildLeft.name} Adlı Sunucudan Çıkış Yaptım!`))
      .catch((error) => console.error(`Sunucudan Çıkarken Hata Meydana Geldi ${error}`));
  });
});
