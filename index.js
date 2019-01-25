const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const secrets = require("./secrets/index");

const bot = new TelegramBot(secrets.botToken, { polling: true });

bot.onText(/\/gif/, async msg => {
  const chatId = msg.chat.id;
  const gif = await axios(
    `http://api.giphy.com/v1/gifs/random?api_key=${secrets.githy}&limit=1`
  );
  const gifUrl = gif.data.data.image_original_url;
  bot.sendVideo(chatId, gifUrl);
});
