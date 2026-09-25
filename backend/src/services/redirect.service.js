const linksExternos = {
  insta: 'https://www.instagram.com/lillium_cb',
  ttk: 'https://www.tiktok.com/@lillium_cb',
  ytb: 'https://www.youtube.com/@Lillium',
  email: 'mailto:lillium.cb@gmail.com',
};

const contagemCliques = {
  insta: 0,
  ttk: 0,
  ytb: 0,
  email: 0,
};

function obterUrlERegistrarClique(rede) {
  const urlDestino = linksExternos[rede];

  if (!urlDestino) {
    return null;
  }

  contagemCliques[rede] = (contagemCliques[rede] || 0) + 1;
  console.log(`[Clique Registrado] ${rede}: ${contagemCliques[rede]}`);

  return urlDestino;
}

function obterEstatisticas() {
  return { totalCliques: contagemCliques };
}

module.exports = {
  obterUrlERegistrarClique,
  obterEstatisticas,
};
