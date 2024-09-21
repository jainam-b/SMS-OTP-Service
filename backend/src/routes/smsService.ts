import twilio from 'twilio';
import dotenv from "dotenv";
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken =  process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export const sendOtp = async (to: string,customMessage:string): Promise<string> => {
  const message = await client.messages
    .create({
      body: `${customMessage}`,
      from: '+13142875440', 
      to
    });
  return message.sid;
};
