import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactTemplate from '@/components/emails/ContactTemplate';
import ContactConfirmationTemplate from '@/components/emails/ContactConfirmationTemplate';
import { render } from '@react-email/render';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate the request data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Informations manquantes' },
        { status: 400 }
      );
    }

    // Send notification email to site owner
    const notificationEmail = await resend.emails.send({
      from: 'Contact <sriccini@gestionspr.com>', // Update with your verified domain
      to: 'sriccini@gestionspr.com', // Update with the recipient email
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      html: await render(ContactTemplate({ name, email, phone, message })),
    });

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: 'Stéphanie Riccini <sriccini@gestionspr.com>', // Update with your verified domain
      to: email,
      subject: 'Merci pour votre message',
      html: await render(ContactConfirmationTemplate({ name })),
    });

    return NextResponse.json({
      notification: notificationEmail,
      confirmation: confirmationEmail,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: "Échec de l'envoi de l'email" },
      { status: 500 }
    );
  }
} 