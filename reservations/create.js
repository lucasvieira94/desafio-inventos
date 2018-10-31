const db = require('../db.js');
const { saveReservationToDB } = require('../dynamoDb');
const mailer = require('../mailer');

module.exports.createReservation = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const { name, email, phone } = body;

  console.log(body);
  console.log(body.name);
  console.log(body.email);
  console.log(body.phone);

  if(!name || !email || !phone) {
    return callback(null, {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
          error: 'Missing required fields to create reservation.'
        })
      });
  }

  console.log("Fields are correct!");
  const mockDB = 'Reserva do usuário ' + body.name + ' is now saved to the db.';
  console.log(mockDB);

  db.reservation.create({
     name: body.name,
     email: body.email,
     phone: body.phone,
   }).then(console.log("called function to save reservation to db");)
   .then(reservation => {
     return callback(null, {
       statusCode: 200,
       headers: {
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Credentials': true
       },
       body: JSON.stringify({
         reservation: mockDB
       })
     });
   })
   .catch(error => {
    callback(null, {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        error: 'There was an error creating your reservation.'
      })
    })
  });

  // generate an email using the data above
  mailer
    .generateContent(body)
  // send the email
    .then(content => mailer.sendEmail(content))
    .then(message => {
      // send a response
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
          message: message
        })
      };

      callback(null, response);
    })
    .catch(error => {
      const response = {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
          error: error
        })
      };
    });

  saveReservationToDB(body.name, body.email, body.phone);
};
