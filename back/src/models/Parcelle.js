const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Bande = require('./Bande');

const Parcelle = sequelize.define('Parcelle', {
  nom: DataTypes.STRING,
  longueur: DataTypes.FLOAT,
  largeur: DataTypes.FLOAT
});

Parcelle.hasMany(Bande, { foreignKey: 'parcelle_id' });
Bande.belongsTo(Parcelle, { foreignKey: 'parcelle_id' });

module.exports = Parcelle;
