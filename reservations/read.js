'use strict';

const db = require("../db.js");

module.exports.getReservation = async (event, context) => {
  const reservation = 'Reserva';
  return {
    statusCode: 200,
    body: JSON.stringify({
      reservation: reservation
    }),
  };
};

module.exports.listReservations = (event, context, callback) => {
  db.reservation
    .findAll({
      attributes: ["id", "name", "email", "phone"]
    })
    .then(reservations => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          reservations: reservations
        })
      };

      callback(null, response);
    });
};
