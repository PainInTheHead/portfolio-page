
import { SiReact, SiNextdotjs, SiTypescript, SiStyledcomponents, SiTailwindcss, SiJavascript, SiExpress, SiTypeorm, SiNx } from 'react-icons/si';
import LogoLoop from '../../ui/LogoLoop/LogoLoop';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiStyledcomponents />, title: "Styled Components", href: "https://styled-components.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiTypeorm />, title: "TypeORM", href: "https://typeorm.io" },
  { node: <SiNx />, title: "Nx", href: "https://nx.dev" },
];

const MainLogoLoop = () => {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        fadeOut
        gap={40}
        speed={120}
        pauseOnHover
        scaleOnHover
        direction="left"
        logoHeight={48}
        logos={techLogos}
        fadeOutColor="#000000"
      />
    </div>
  );
}

export default MainLogoLoop;