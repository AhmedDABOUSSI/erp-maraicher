const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Bande = sequelize.define('Bande', {
  numero: DataTypes.INTEGER,
  longueur: DataTypes.FLOAT,
  largeur: DataTypes.FLOAT,
  parcelle_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Parcelles',
      key: 'id'
    }
  }
});

module.exports = Bande;
