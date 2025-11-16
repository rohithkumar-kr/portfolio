import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).send("Missing fields");
    }

    // your Gmail will receive the message
    const toEmail = process.env.RECEIVE_EMAIL;

    const msg = {
      to: toEmail,
      from: process.env.SENDGRID_FROM, // must match verified sender
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await sgMail.send(msg);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("SendGrid error:", error?.response?.body || error);
    return res.status(500).send("Email send error");
  }
}
