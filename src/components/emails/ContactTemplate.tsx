import * as React from 'react';
import {
  Html,
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import baseStyles from './BaseEmailTemplate';
import { EMAIL_ASSETS } from './constants';

interface ContactTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactTemplate({ name, email, message }: ContactTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
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
              New Contact Form Submission
            </Heading>
            <Text style={baseStyles.text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={baseStyles.text}>
              <strong>Email:</strong> {email}
            </Text>
            <Hr style={{ margin: '24px 0', border: '1px solid rgba(255, 255, 255, 0.1)' }} />
            <Text style={baseStyles.text}>
              <strong>Message:</strong><br />
              {message}
            </Text>
            <Link
              href={`mailto:${email}`}
              style={baseStyles.button}
            >
              Reply to {name}
            </Link>
            <Text style={baseStyles.footer}>
              This message was sent from the contact form on lexchain.ai
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
} 