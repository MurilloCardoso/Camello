const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors());
let cachedTopGames = null;
let cachedTopGamesTimestamp = null;

let cachedComingSoon = null;
let cachedComingSoonTimestamp = null;

const ONE_DAY = 24 * 60 * 60 * 1000;
async function getTopSellingGames() {
  const steamUrl = 'https://store.steampowered.com/search/?filter=topsellers';
  const { data } = await axios.get(steamUrl);
  const $ = cheerio.load(data);

  const games = [];

  $('.search_result_row').each((i, el) => {
    const title = $(el).find('.title').text().trim();
    const link = $(el).attr('href');
    const match = link?.match(/app\/(\d+)/);
    const appid = match ? match[1] : null;

    if (appid && title && i < 8) { 
      games.push({ title, appid });
    }
  });

  const detailedGames = await Promise.all(games.map(async (game) => {
    try {
      const res = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${game.appid}`);
      const data = res.data[game.appid]?.data;
     
      return data;
    } catch {
      return null;
    }
  }));

  return detailedGames.filter(Boolean);
}
async function getSelectGame(gameappid) {

    try {
      const res = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${gameappid}`);
     
      return res.data;
    } catch {
      return null;
    }
 

}
app.get('/api/coming-soon', async (req, res) => {
  const now = Date.now();

  if (cachedComingSoon && (now - cachedComingSoonTimestamp < ONE_DAY)) {
    console.log('🔁 Servindo coming-soon do cache');
    return res.json(cachedComingSoon);
  }

  try {
    const steamUrl = 'https://store.steampowered.com/search/?filter=comingsoon';
    const { data } = await axios.get(steamUrl);
    const $ = cheerio.load(data);

    const games = [];

    $('.search_result_row').each((i, el) => {
      const title = $(el).find('.title').text().trim();
      const link = $(el).attr('href');
      const match = link?.match(/app\/(\d+)/);
      const appid = match ? match[1] : null;

      if (appid && title && i < 8) {
        games.push({ title, appid });
      }
    });

    const detailedGames = await Promise.all(games.map(async (game) => {
      try {
        const res = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${game.appid}`);
        const data = res.data[game.appid]?.data;
       
      return data;
      } catch {
        return null;
      }
    }));

    cachedComingSoon = detailedGames.filter(Boolean);
    cachedComingSoonTimestamp = now;

    console.log('🌐 Buscando coming-soon da Steam');
    res.json(cachedComingSoon);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar jogos em pré-venda.' });
  }
});
  
  app.get('/api/top-games', async (req, res) => {
    const now = Date.now();
  
    if (cachedTopGames && (now - cachedTopGamesTimestamp < ONE_DAY)) {
      console.log('🔁 Servindo top-games do cache');
      return res.json(cachedTopGames);
    }
  
    try {
      const games = await getTopSellingGames();
      cachedTopGames = games;
      cachedTopGamesTimestamp = now;
      console.log('🌐 Buscando top-games da Steam');
      res.json(games);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar jogos.' });
    }
  });
  app.get('/api/select-game', async (req, res) => {
    const appid = req.query.appid;
    if (!appid) {
      return res.status(400).json({ error: 'appid não fornecido.' });
    }
    
    try {
      console.log("🚀 Buscando jogo selecionado com appid:", appid);
      const response = await getSelectGame(appid);
    console.log("🚀 Buscando jogo selecionado:",response);

      if (!response || !response[appid]?.success) {
        return res.status(404).json({ error: 'Jogo não encontrado.' });
      }
  
      res.json(response[appid].data);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar o jogo selecionado.' });
    }
  });
const PORT = 4000;
app.listen(PORT, () => console.log(`Backend rodando em http://localhost:${PORT}`));
