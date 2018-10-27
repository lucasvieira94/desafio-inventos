module.exports.createReservation = (event, context, callback) => {
  const body = JSON.parse(event.body);

  const mockDB = body.todo + ' is now saved to the db.';

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      todo: mockDB
    })
  });
};
