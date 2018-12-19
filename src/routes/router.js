const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const mailOptions = {
  from: "hvzu3cgjcd6bengx@ethereal.email",
  replyTo: "hvzu3cgjcd6bengx@ethereal.email",
  subject: "Mailed A Node"
};

const smtpConfig = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "380fa3b9f0a1c3",
    pass: "90f783fad811ce"
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
