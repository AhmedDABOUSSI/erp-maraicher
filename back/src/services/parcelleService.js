const Parcelle = require('../models/Parcelle');
const Bande = require('../models/Bande');

const standardLongueur = 50;
const standardLargeur = 1.2;


async function createParcelleWithBandes(nom, longueur, largeur) {
  const parcelle = await Parcelle.create({ nom, longueur, largeur });

  const n1 = Math.floor(longueur / standardLongueur) * Math.floor(largeur / standardLargeur);
  const n2 = Math.floor(longueur / standardLargeur) * Math.floor(largeur / standardLongueur);
  const nbBandes = Math.max(n1, n2);

  const bandes = [];

  for (let i = 1; i <= nbBandes; i++) {
    bandes.push({
      numero: i,
      longueur: standardLongueur,
      largeur: standardLargeur,
      parcelle_id: parcelle.id
    });
  }

  await Bande.bulkCreate(bandes);
  return parcelle;
}



module.exports = { createParcelleWithBandes };
