import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo />}>
        <li>
          <Link href="/">
            <a>Sobre</a>
          </Link>
        </li>
        <li>
+         <Link href="/">
+           <a>Yammer</a>
+         </Link>
+        </li>
        <li>
          <Link href="/">
            <a>Integrantes</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Projetos com arduino\n'}
            <span className="text-primary-500">Modernos e Profissionais</span>
          </>
        }
        description=""
        button={
          <Link href="https://instituto-bds.netlify.com">
            <a>
              <Button xl>Visite o site do Instituto BdS</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
