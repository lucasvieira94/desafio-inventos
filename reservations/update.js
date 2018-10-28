const db = require('../db.js');

module.exports.updateReservation = (event, context, callback) => {
  const reservation_id = event.pathParameters.id;

  const body = JSON.parse(event.body);

  db.reservation
    .update(body, {
        where: { id: reservation_id },
        returning: true
      })
    .then(responseObject => {
      console.log(responseObject);
      const [rowsAffected, reservationObject] = responseObject;
      console.log(`${rowsAffected} row(s) were updated with this object: ${JSON.stringify(body)}`);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          reservation: reservationObject[0]
        })
      });
    });
};
