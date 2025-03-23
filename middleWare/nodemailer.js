const nodemailer = require('nodemailer')

const sendEmail = async (Options) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        service: process.env.SERVICE,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: process.env.APP_USERNAME,
          pass: process.env.APP_PASSWORD,
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from:`Vege Food <${process.env.APP_USERNAME}>`, // sender address
          to: Options.email, // list of receivers
          subject: Options.subject, // Subject line
          html: Options.html, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
      
      main().catch(console.error);
}

module.exports = sendEmail

