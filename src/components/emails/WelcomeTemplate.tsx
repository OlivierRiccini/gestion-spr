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

export default function WelcomeTemplate() {
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="dark" />
      </Head>
      <Preview>Welcome to Lexchain AI - Experience 5x Faster Dispute Resolution</Preview>
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
              Welcome to the Future of Dispute Resolution
            </Heading>
            <Text style={baseStyles.text}>
              Thank you for joining Lexchain AI. You&apos;re now part of a revolutionary platform that resolves disputes 5x faster while cutting legal costs by up to 40% through AI and blockchain technology.
            </Text>
            <Text style={baseStyles.text}>
              During our beta testing, we&apos;ve already helped numerous organizations streamline their dispute resolution processes, and your insights will be invaluable in shaping our platform further.
            </Text>
            <Text style={baseStyles.text}>
              To help us better understand your specific needs and challenges:
            </Text>
            <Link href={`${EMAIL_ASSETS.TYPEFORM_LINK}`} style={baseStyles.button}>
              Share Your Needs (2 min survey)
            </Link>
            <Text style={baseStyles.text}>
              Want to see how Lexchain AI can transform your dispute resolution process? Schedule a personalized demo with our founder:
            </Text>
            <Link href={`${EMAIL_ASSETS.CALENDLY_LINK}`} style={baseStyles.secondaryButton}>
              Book a Demo (15 min)
            </Link>
            <Text style={baseStyles.footer}>
              Best regards,<br />
              Olivier Riccini<br />
              Founder, Lexchain AI<br />
              <br />
              P.S. Follow us on <Link href={EMAIL_ASSETS.LINKEDIN_URL}>LinkedIn</Link> for the latest updates on our journey to revolutionize dispute resolution.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
} 