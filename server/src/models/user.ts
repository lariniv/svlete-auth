import { ObjectId } from "mongodb";
import nodemailer from "nodemailer";

export default class User {
  constructor(
    public email: string,
    public password: string,
    public code?: number,
    private id?: ObjectId,
    public isConfirmed?: boolean
  ) {
    this.id = new ObjectId();
    this.isConfirmed = false;
    this.code = this.generateCode();
  }

  private generateCode() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  public async sendCode() {
    const transporter = nodemailer.createTransport({
      host: "smtp.forwardemail.net",
      port: 465,
      secure: true,
      auth: {
        user: "form-submition@ivanlarin.xyz",
        pass: "6e32b2fd4ac26e087db3a658",
      },
    });

    const message = {
      from: "form-submition@ivanlarin.xyz",
      to: this.email,
      subject: "Confirm your email",
      html: `${this.code} is your confirmation code`,
    };

    const info = await transporter.sendMail(message);

    return info.accepted.length > 0;
  }

  public getId() {
    return this.id;
  }
}
