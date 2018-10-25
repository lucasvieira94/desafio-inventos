'use strict';

module.exports.hello = (event, context, callback) => {
  console.log(event.pathParameters.name);

    const reply = `Hello ${event.pathParameters.name}`;

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: JSON.stringify(reply)
      }),
    };

  callback(null, response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
