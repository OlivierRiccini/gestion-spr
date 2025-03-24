import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ContactTemplate from '@/components/emails/ContactTemplate';
import ContactConfirmationTemplate from '@/components/emails/ContactConfirmationTemplate';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    if (!email || !name || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send notification to admin
    await resend.emails.send({
      from: 'Lexchain AI <hello@lexchainai.com>',
      to: 'hello@lexchainai.com',
      subject: `New Contact Form Submission from ${name}`,
      html: await render(ContactTemplate({ name, email, message })),
    });

    // Send confirmation to user
    await resend.emails.send({
      from: 'Lexchain AI <hello@lexchainai.com>',
      to: [email],
      subject: 'Thank you for contacting Lexchain AI',
      html: await render(ContactConfirmationTemplate({ name })),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 