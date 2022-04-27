import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter logo="" iconList="">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
+         <Link href="/">
+           Yammer
+         </Link>
+        </li>
        <li>
          <Link href="/">
            Integrantes
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
