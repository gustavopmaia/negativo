import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Negativo"
    description="Empresa de Arduino 'Negativo' atrai coisas positivas'"
  >
    <VerticalFeatureRow
      title="Sobre"
      description="Empresa de projetos com arduino para facilitar a vida de pessoas no seu dia a dia, com projetos inteligentes e funcionais"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Projetos"
      description="Em breve."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Integrantes"
      description="- Gustavo Maia 
      - Pedro Santos 
      - Pedro Marques 
      - Joao Pedro Soares 
      - Vitor Gabriel"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
