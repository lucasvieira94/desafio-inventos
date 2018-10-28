'use strict';

const db = require("../db.js");

module.exports.getReservation = (event, context, callback) => {
  const reservation_id = event.pathParameters.id;
  db.reservation
    .findOne({
      where: { id: reservation_id },
      attributes: ["id", "name", "email", "phone"]
    })
    .then(reservation => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          reservation: reservation
        })
      };

      callback(null, response);
    })
    .catch(error => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: `There was an error fetching your reservation with id: ${reservation_id}`
        })
      })
    });
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
    })
    .catch(error => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: `There was an error fetching your reservations.`
        })
      })
    });
};
