const Parcelle = require('../models/Parcelle');
const Bande = require('../models/Bande');

const standardLongueur = 50;
const standardLargeur = 1.2;


async function createParcelleWithBandes(nom, longueur, largeur) {
  const parcelle = await Parcelle.create({ nom, longueur, largeur });

  const bandes = [];

  const nLong = Math.floor(longueur / standardLongueur);
  const nLarg = Math.floor(largeur / standardLargeur);

  if (nLong < 1 || nLarg < 1) {
    return parcelle;
  }

  let numero = 1;

  for (let i = 0; i < nLarg; i++) {
    for (let j = 0; j < nLong; j++) {
      bandes.push({
        numero: numero++,
        longueur: standardLongueur,
        largeur: standardLargeur,
        parcelle_id: parcelle.id
      });
    }
  }

  await Bande.bulkCreate(bandes);
  return parcelle;
}


module.exports = { createParcelleWithBandes };
