const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_EMAIL_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);
  console.log("body", body);
  const message = `
  Name: ${body.firt_name} ${body.last_name}\r\n
  Email: ${body.email}\r\n
  Service: ${body.service || "Newsletter"}\r\n
  Message: ${body.message}\r\n
  `;

  const data = {
    to: "admin@babindia.com",
    from: "support@babindia.com",
    subject: "Quote / Query / Newsletter",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  return mail
    .send(data)
    .then(() => {
      console.log("success ");
      return res.status(200).json({ status: "success", message: "Mail sent!" });
    })
    .catch((err) => {
      //   console.log("err", err);
      console.log("err", err.response.body);
      return res
        .status(400)
        .json({ status: "fail", message: "Error while sending mail!" });
    });
};
