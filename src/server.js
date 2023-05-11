const express = require('express');
const app = express();
const data = require('../../pokedex/src/data.json');
const cors = require('cors');

app.use(cors());

app.get('/api/pokemon', (req, res) => {
  const { search } = req.query;
  let filteredData = data.pokemon;
  
  if (search) {
    // Filtrez les données si le paramètre de recherche est fourni
    filteredData = filteredData.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  
  res.json(filteredData);
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});







