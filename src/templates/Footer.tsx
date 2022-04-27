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
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Integrantes</a>
          </Link>
        </li>
        <li>
+          <Link target="_blank" href="https://web.yammer.com/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIxMDM1NzMyNzQ2MjQifQ">
+            <a>Yammer</a>
+          </Link>
+        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
