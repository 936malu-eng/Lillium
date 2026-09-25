const { Router } = require('express');
const { obterUrlERegistrarClique, obterEstatisticas } = require('../services/redirect.service');

const router = Router();

// Rota de Redirecionamento
router.get('/redirect/:rede', (req, res) => {
  const { rede } = req.params;
  const urlDestino = obterUrlERegistrarClique(rede);

  if (!urlDestino) {
    return res.status(404).json({ erro: 'Link não encontrado.' });
  }

  return res.redirect(302, urlDestino);
});

// Rota de Estatísticas
router.get('/estatisticas', (req, res) => {
  const estatisticas = obterEstatisticas();
  return res.json(estatisticas);
});

module.exports = router;

app.js
const express = require('express');
const cors = require('cors');
const redirectRoutes = require('./routes/redirect.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', redirectRoutes);

module.exports = app;


