'use strict';
const { saveReservationToDB } = require('./dynamoDb');

module.exports.saveReservation = async (event, context) => {

  saveReservationToDB(event, "spongebob@gmail.com", "21922222222");

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Saved ${event}`,
      input: event,
    }),
  };

};
