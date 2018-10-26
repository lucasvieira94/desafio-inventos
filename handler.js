'use strict';
const { saveReservationToDB, sendReservationEmail } = require('./utils');

module.exports.minionStore = (event, context, callback) => {

  // 1. render landing page

  // 2. create a new reservation

  // 3. save the reservation data to our database

  // 4. send an email with the corresponding data from the reservation

  console.log(event.pathParameters.name);

    const reply = `Hello ${event.pathParameters.name}`;

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: JSON.stringify(reply)
      }),
    };

  callback(null, response);
};
