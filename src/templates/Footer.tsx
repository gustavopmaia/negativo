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
+         <Link href="https://web.yammer.com/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIxMDM1NzMyNzQ2MjQifQ">
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
