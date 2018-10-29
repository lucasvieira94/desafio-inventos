const mailer = require('nodemailer');
const config = require('./config');

module.exports = (content) => {
  return new Promise((resolve, reject) => {
    // configure the transporter
    let transporter = mailer.createTransport({
      host: "smtp.poli.ufrj.br",
      port: 587,
      secure: false,
      service: "gmail",
      auth: {
        user: config.user,
        pass: config.password
      }
    });
    console.log("Created transporter!");
    // create recipient srtring
    //let recipients = "";
    //config.to.forEach(recipient => recipents += `${recipient}, `);
    // define email options
    const mailOptions = {
      from: "minionStore@gmail.com",
      to: config.to,
      subject: content.subject,
      text: content.textBody,
      html: content.htmlBody
    };
    console.log("Configured mail options");
    // send the email
    return transporter.sendMail(mailOptions, (error, info) => {
      if(error) {
        const errorMessage = JSON.stringify(error);
        console.log("Error sending email.", errorMessage);
        reject(new Error(errorMessage));
      } else {
        const successMesssage = `Mesage ${info.messageId} send: ${info.response}`;
        console.log(successMesssage);
        resolve(successMesssage);
      }
    })
  })
};
