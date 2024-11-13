import nodemailer from'nodemailer';

const smtpTransport = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,
  secure: false,
});

export { smtpTransport };