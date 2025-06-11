const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors());

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

    if (appid && title && i < 8) { // limita pra 5
      games.push({ title, appid });
    }
  });

  const detailedGames = await Promise.all(games.map(async (game) => {
    try {
      const res = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${game.appid}`);
      const data = res.data[game.appid]?.data;
      return {
        title: game.title,
        appid: game.appid,
        price: data?.price_overview?.final_formatted || 'Gratuito',
        image: data?.header_image,
        link: `https://store.steampowered.com/app/${game.appid}`,
      };
    } catch {
      return null;
    }
  }));

  return detailedGames.filter(Boolean);
}
app.get('/api/coming-soon', async (req, res) => {
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
          return {
            title: game.title,
            appid: game.appid,
            price: data?.price_overview?.final_formatted || 'Em breve',
            image: data?.header_image,
            link: `https://store.steampowered.com/app/${game.appid}`,
          };
        } catch {
          return null;
        }
      }));
  
      res.json(detailedGames.filter(Boolean));
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar jogos em pré-venda.' });
    }
  });
  
app.get('/api/top-games', async (req, res) => {
  try {
    const games = await getTopSellingGames();
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar jogos.' });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Backend rodando em http://localhost:${PORT}`));
