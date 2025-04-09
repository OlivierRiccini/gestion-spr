import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface ContactTemplateProps {
  name: string;
  email: string;
  phone?: string; // Optional phone number
  message: string;
}

export const ContactTemplate = ({
  name,
  email,
  phone,
  message,
}: ContactTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message de {name} via le formulaire de contact</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[600px]">
            <Heading className="text-[#a39990] text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Stéphanie Riccini | Gestion de Patrimoine
            </Heading>
            <Text className="text-[#666666] text-[14px] leading-[24px]">
              Bonjour Stéphanie,
            </Text>
            <Text className="text-[#666666] text-[14px] leading-[24px]">
              Vous avez reçu un nouveau message de <strong>{name}</strong> via le formulaire de contact de votre site web.
            </Text>
            <Section className="bg-[#f9f9f9] border border-solid border-[#eaeaea] rounded p-[20px] my-[16px]">
              <Text className="text-[#666666] text-[14px] leading-[24px] m-0 mb-[10px]">
                <strong>Nom:</strong> {name}
              </Text>
              <Text className="text-[#666666] text-[14px] leading-[24px] m-0 mb-[10px]">
                <strong>Email:</strong> {email}
              </Text>
              {phone && (
                <Text className="text-[#666666] text-[14px] leading-[24px] m-0 mb-[10px]">
                  <strong>Téléphone:</strong> {phone}
                </Text>
              )}
              <Text className="text-[#666666] text-[14px] leading-[24px] m-0">
                <strong>Message:</strong>
              </Text>
              <Text className="text-[#666666] text-[14px] leading-[24px] m-0 whitespace-pre-line">
                {message}
              </Text>
            </Section>
            <Text className="text-[#666666] text-[14px] leading-[24px]">
              Vous pouvez répondre directement à cet email pour contacter {name}.
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px] text-center">
              © {new Date().getFullYear()} Stéphanie Riccini | Conseil en Gestion de Patrimoine
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactTemplate; 