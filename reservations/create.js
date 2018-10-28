const db = require('../db.js');
const { saveReservationToDB } = require('../utils');

module.exports.createReservation = (event, context, callback) => {
  const body = JSON.parse(event.body);

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
   });

   saveReservationToDB(body.name, body.email, body.phone);
};
