import type { Metadata } from 'next';
import LegalPage from '@/components/sections/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e aviso de projeto conceptual do Shopping Fortaleza.',
  alternates: { canonical: '/politica-de-privacidade' },
};

export default function PrivacidadePage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      updated="Julho de 2026"
      intro="A sua privacidade é importante. Esta página explica, de forma simples, como são tratados os dados neste site conceptual."
      sections={[
        {
          id: 'aviso',
          heading: 'Aviso — projeto conceptual',
          body: [
            'Este site é um exercício de design e portfólio, sem qualquer afiliação, patrocínio ou relação oficial com o Shopping Fortaleza de Luanda ou entidades associadas.',
            'Nomes de lojas, eventos, testemunhos, imagens e dados de contacto são fictícios ou meramente ilustrativos e não representam serviços reais.',
          ],
        },
        {
          heading: 'Dados recolhidos',
          body: [
            'O formulário de contacto e a subscrição de newsletter podem recolher o nome e o email que introduzir. Estes dados destinam-se apenas a demonstrar o funcionamento do site.',
            'Não são utilizados cookies de rastreio nem ferramentas de analítica de terceiros.',
          ],
        },
        {
          heading: 'Utilização dos dados',
          body: [
            'Caso o formulário esteja ligado a um serviço de envio (Formspree), a mensagem é encaminhada para o email do responsável pelo projeto. Sem essa configuração, os dados não são armazenados.',
          ],
        },
        {
          heading: 'Os seus direitos',
          body: [
            'Pode solicitar a qualquer momento a eliminação de dados que tenha submetido, através dos contactos indicados no site.',
          ],
        },
      ]}
    />
  );
}
