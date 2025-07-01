require('dotenv').config();
const app = require('./src/app');
const sequelize = require('./src/sequelize');

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Base synchronisée');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Erreur de synchronisation :', err);
});
