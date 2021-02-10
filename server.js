require("dotenv").config();
const nodemailer = require("nodemailer");

// Step 1 - Create a Transporter
// this is whats going to connect you to whatever host domain you are trying to connect to
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Step 2 - Set the mail options (from who? who to? subject? message?)
let mailOptions = {
  from: "yummyfunnybunny13@gmail.com",
  to: "jake.thomas.nichols@gmail.com, jake.thomas.nichols@gmail.com", // you can add as many emails as you'd like
  cc: "jake.thomas.nichols@gmail.com", // you can do the same as above with cc
  subject: "test subject",
  text: "this is the message of the email",
};

// Step 3 - Send the email
transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error Occured");
  } else {
    console.log("Email sent!");
  }
});
