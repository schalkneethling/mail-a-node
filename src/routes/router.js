const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

require("dotenv").config();

const mailOptions = {
  from: process.env.MAIL_FROM,
  replyTo: process.env.MAIL_REPLYTO,
  subject: process.env.SUBJECT
};

const smtpConfig = {
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
};

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/send-mail", (req, res) => {
  const transporter = nodemailer.createTransport(smtpConfig);
  mailOptions["to"] = req.body.to;
  mailOptions["text"] = req.body.message;

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    }

    console.log(info);
    res.send(info);
  });
});

module.exports = router;
