import * as React from 'react';
import {
  Html,
  Body,
  Container,
  Head,
  Heading,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import baseStyles from './BaseEmailTemplate';
import { EMAIL_ASSETS } from './constants';

interface ContactConfirmationTemplateProps {
  name: string;
}

export default function ContactConfirmationTemplate({ name }: ContactConfirmationTemplateProps) {
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="dark" />
      </Head>
      <Preview>Thank you for contacting Lexchain AI</Preview>
      <Body style={baseStyles.body}>
        <Container style={baseStyles.container}>
          <Img
            src={EMAIL_ASSETS.LOGO_URL}
            height="40"
            alt="Lexchain AI"
            style={{ marginBottom: '24px' }}
          />
          <Section style={baseStyles.section}>
            <Heading style={baseStyles.heading}>
              Thank you for reaching out, {name}
            </Heading>
            <Text style={baseStyles.text}>
              We&apos;ve received your message and will get back to you shortly.
            </Text>
            <Text style={baseStyles.text}>
              Your interest means a lot to us! While we prepare our response, would you help us shape the future of dispute resolution? Your thoughts would be incredibly valuable.
            </Text>
            <Link href={`${EMAIL_ASSETS.TYPEFORM_LINK}`} style={baseStyles.button}>
              Take our Survey (2 min)
            </Link>
            <Text style={baseStyles.footer}>
              Best regards,<br />
              Olivier Riccini<br />
              Founder, Lexchain AI
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
} 