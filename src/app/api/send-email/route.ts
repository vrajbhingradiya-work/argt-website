import EmailTemplate from "@/emails/EmailTemplate";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, response: Response) {
  try {
    const { clientName, clientNumber, clientEmailId, clientMessage } =
      await request.json();

    const { data, error } = await resend.emails.send({
      from: "information@alroshangroups.com",
      to: ["roshansani786@gmail.com"],
      // to: ["lll.rg3.lll@gmail.com"],
      subject: `Inquiry Raised by ${clientName}`,
      react: EmailTemplate({
        clientName,
        clientNumber,
        clientEmailId,
        clientMessage,
      }) as React.ReactElement,
    });
    console.log("email sent");

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
