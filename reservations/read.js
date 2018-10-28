'use strict';

module.exports.getReservation = async (event, context) => {
  const reservation = 'Reserva';
  return {
    statusCode: 200,
    body: JSON.stringify({
      reservation: reservation
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
