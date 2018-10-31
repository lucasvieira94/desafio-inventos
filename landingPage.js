'use strict';

module.exports.getLandingPage = async (event, context) => {
  const message = 'Thanks for hitting our landing page.';
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: message
    }),
  };
};
