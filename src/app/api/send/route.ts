import { EmailTemplate } from '../../Components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const { data, error } = await resend.emails.send({
      from: 'no-reply@bettermemory.tech',
      to: [email],
      subject: 'Subscription Successful: Stay Informed with Our Latest News',
      react: EmailTemplate(),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
