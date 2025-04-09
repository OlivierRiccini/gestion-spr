import {
  Body,
  Button,
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

interface ConfirmationTemplateProps {
  name: string;
}

export const ConfirmationTemplate = ({
  name,
}: ConfirmationTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Merci pour votre message, {name}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[600px]">
            <Heading className="text-[#a39990] text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Stéphanie Riccini | Gestion de Patrimoine
            </Heading>
            <Text className="text-[#666666] text-[14px] leading-[24px]">
              Bonjour {name},
            </Text>
            <Text className="text-[#666666] text-[14px] leading-[24px]">
              Je vous remercie pour votre message. Je l&apos;ai bien reçu et je vous répondrai dans les meilleurs délais, généralement sous 24 à 48 heures ouvrées.
            </Text>
            <Text className="text-[#666666] text-[14px] leading-[24px]">
              Si votre demande est urgente, n&apos;hésitez pas à me contacter directement par téléphone au +33 6 13 08 92 73.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#a39990] rounded text-white text-[14px] font-bold no-underline text-center px-[20px] py-[12px]"
                href="https://www.gestionspr.com/appointment"
              >
                Prendre rendez-vous
              </Button>
            </Section>
            <Text className="text-[#666666] text-[14px] leading-[24px]">
              Je vous remercie de votre confiance et reste à votre disposition pour toute question concernant la gestion de votre patrimoine.
            </Text>
            <Text className="text-[#666666] text-[14px] leading-[24px]">
              Cordialement,
            </Text>
            <Text className="text-[#666666] text-[14px] leading-[24px]">
              Stéphanie Riccini
              <br />
              Conseillère en Gestion de Patrimoine
              <br />
              +33 6 13 08 92 73
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px] text-center">
              © {new Date().getFullYear()} Stéphanie Riccini | Conseil en Gestion de Patrimoine
              <br />
              Cet email est une confirmation automatique, merci de ne pas y répondre.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ConfirmationTemplate; 