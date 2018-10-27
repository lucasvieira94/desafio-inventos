'use strict';

module.exports.getLandingPage = async (event, context) => {
  const message = 'Thanks for hitting our landing page.';
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: message
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
