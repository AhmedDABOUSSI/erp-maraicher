const express = require('express');
const router = express.Router();
const Parcelle = require('../models/Parcelle');
const Bande = require('../models/Bande');
const { createParcelleWithBandes } = require('../services/parcelleService');

// POST /parcelles
router.post('/', async (req, res) => {
  try {
    const { nom, longueur, largeur } = req.body;
    const parcelle = await createParcelleWithBandes(nom, longueur, largeur);
    res.status(201).json(parcelle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /parcelles
router.get('/', async (req, res) => {
  try {
    const parcelles = await Parcelle.findAll({
      include: [{ model: Bande }],
    });

    const result = parcelles.map(p => ({
      id: p.id,
      nom: p.nom,
      longueur: p.longueur,
      largeur: p.largeur,
      nbBandes: p.Bandes.length
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /parcelles/:id/bandes
router.get('/:id/bandes', async (req, res) => {
  try {
    const bandes = await Bande.findAll({ where: { parcelle_id: req.params.id } });
    res.json(bandes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
