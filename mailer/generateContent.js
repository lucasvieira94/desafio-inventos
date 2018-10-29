const momentTimeZone = require("moment-timezone");

module.exports = (reservationOwner) => {
  return new Promise((resolve, reject) => {
    try {
      // timestamp
      const timestamp = `${momentTimeZone.tz('America/Sao_Paulo').format('MMMM Do, h:mm:ss a')}`;
      // subject line
      const subject = `New reservation!`;
      // text body
      const textBody = `Great news!

      ${reservationOwner.name} has made a new reservation to your store on
      ${timestamp}.

      You can contact ${reservationOwner.name} to arrange the minion delivery
      by the email ${reservationOwner.email} or the phone ${reservationOwner.phone}.

      Congrats!

      Sincerely,

      Your Serverless function`;
      // html
      const htmlBody = `
        <div style="max-width: 600px; margin: 20px auto">
          <h1>Great news!</h1>
          <p style="line-height: 22px; font-size: 16px;">${reservationOwner.name} has made a new reservation</b> to your store on ${timestamp}.</p>
          <p style="line-height: 22px; font-size: 16px;">You can contact ${reservationOwner.name} to arrange the minion delivery</p>
          <p style="line-height: 22px; font-size: 16px;">by the email ${reservationOwner.email} or the phone ${reservationOwner.phone}.</p>
          <p style="line-height: 22px; font-size: 16px;">Congrats!</p>
          <p style="line-height: 22px; font-size: 16px;">Sincerely,</p>
          <p style="line-height: 22px; font-size: 16px;"><i>Your Serverless Function</i></p>
        </div>
      `;

      console.log("Generated content.");
      console.log(textBody);
      resolve({
        subject,
        textBody,
        htmlBody
      });
    } catch (error) {
      console.log("Error generating email content.", error);

      reject(new Error(JSON.stringify(error)));
    }
  })
};
