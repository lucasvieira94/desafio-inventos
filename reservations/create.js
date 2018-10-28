const db = require('../db.js');
const { saveReservationToDB } = require('../utils');

module.exports.createReservation = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const { name, email, phone } = body;

  if(!name || !email || !phone) {
    return callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: 'Missing required fields to create reservation.'
        })
      });
  }

  const mockDB = 'Reserva do usuário ' + body.name + ' is now saved to the db.';

  db.reservation.create({
     name: body.name,
     email: body.email,
     phone: body.phone
   }).then(reservation => {
     return callback(null, {
       statusCode: 200,
       body: JSON.stringify({
         reservation: mockDB
       })
     });
   })
   .catch(error => {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: 'There was an error creating your reservation.'
      })
    })
  });

  saveReservationToDB(body.name, body.email, body.phone);
};
