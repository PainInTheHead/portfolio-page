import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiStyledcomponents,
  SiJavascript, SiRedux, SiSass, SiMui, SiAntdesign, SiFramer, SiDocker,
  SiNx, SiStripe, SiTwilio, SiGoogleanalytics, SiVercel, SiPerl, SiWebpack,
   SiReduxsaga, SiPostgresql, SiTypeorm, SiExpress, SiMongodb
} from 'react-icons/si';
import { CurrentStackENUM } from './Stack.type';

export const frontendTech = [
  { Icon: SiReact, title: "React" },
  { Icon: SiNextdotjs, title: "Next.js" },
  { Icon: SiTypescript, title: "TypeScript" },
  { Icon: SiJavascript, title: "JavaScript" },
  { Icon: SiRedux, title: "Redux Toolkit" },
  { Icon: SiReduxsaga, title: "Redux-Saga" },
  { Icon: SiStyledcomponents, title: "Styled-components" },
  { Icon: SiSass, title: "Sass" },
  { Icon: SiTailwindcss, title: "Tailwind CSS" },
  { Icon: SiMui, title: "MUI" },
  { Icon: SiAntdesign, title: "Ant Design" },
  { Icon: SiFramer, title: "Framer Motion" },
];

export const backendTech = [
  { Icon: SiTypeorm, title: "TypeORM" },
  { Icon: SiMongodb, title: "MongoDB" },
  { Icon: SiExpress, title: "Express.js" },
  { Icon: SiPostgresql, title: "PostgreSQL" },
  { Icon: SiStripe, title: "Stripe" },
  { Icon: SiTwilio, title: "Twilio" },
  { Icon: SiNx, title: "Nx" },
  { Icon: SiDocker, title: "Docker" },
  { Icon: SiPerl, title: "Perl (SSR)" },
  { Icon: SiWebpack, title: "Webpack" },
  { Icon: SiVercel, title: "Vercel" },
  { Icon: SiGoogleanalytics, title: "Google Analytics" },
];

export const allStacks = {
  [CurrentStackENUM.MAIN_STACK]: {
    tech: frontendTech,
    title: "Main Stack",
  },
  [CurrentStackENUM.FAMILIAR_STACK]: {
    tech: backendTech,
    title: "Familiar Stack",
  }
}