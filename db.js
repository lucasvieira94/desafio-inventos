const Sequelize =  require('sequelize');

const sequelize =  new Sequelize(
  'postgres://osiujcsq:wEhWSYqZLKZ5tRrBSLFcNYbzsEuCW8GU@pellefant.db.elephantsql.com:5432/osiujcsq'
);

const reservation = require('./models/reservation')(sequelize, Sequelize);

const db = {
  Sequelize,
  sequelize,
  reservation
};

db.sequelize.sync(/*{ force: true}*/);

module.exports = db;

//db.reservation.findOne({ where: { id: 1 }});
