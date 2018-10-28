const db = require('../db.js');

module.exports.deleteReservation = (event, context, callback) => {
  const reservation_id = event.pathParameters.id;

   db.reservation
    .destroy({ where: { id: reservation_id } })
    .then(deleted_number => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          deleted_number: deleted_number
        })
      });
    })
    .catch(error => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: `There was an error deleting your reservation with id: ${reservation_id}`
        })
      })
    });
};
