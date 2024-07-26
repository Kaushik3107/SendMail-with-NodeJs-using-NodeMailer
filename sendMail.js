const nodemailer = require('nodemailer');
require("dotenv").config();

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email service provider like 'gmail', 'yahoo', 'outlook', etc.
  host:"smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS   // Your email password or an app-specific password if using 2FA
  }
});

// Setup email data
let mailOptions = {
  from:{
    name:'Demo Mail',
    address:process.env.EMAIL_USER
  }, // Sender address
  to: 'kaushikdange1993@gmail.com', // List of recipients
  subject: 'Hello from Kaushik', // Subject line
  text: 'Hello world?', // Plain text body
  html: '<b>Hello world?</b>' // HTML body
};

// // Send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log('Message sent: %s', info.messageId);
//   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
// });

const sendMail = async (transporter, mailOptions)=>{
    try {
        await transporter.sendMail(mailOptions)
        console.log("Email has been sent Successfully");
    } catch (error) {
        console.log(error);
    }
}

sendMail(transporter, mailOptions)