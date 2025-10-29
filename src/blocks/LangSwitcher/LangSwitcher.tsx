import { useMemo } from "react";
import StyledLangSwitcher from "./LangSwitcher.styles";
import { useLanguage } from "../../context/LanguageContext";
import GooeyNav from "../../components/GooeyNav/GooeyNav";

const LangSwitcher = () => {
  const { switchLanguage } = useLanguage();

  const switcherContent = useMemo(() => {
    const ru = {
      label: 'RU',
      onClick: switchLanguage
    }

    const en = {
      label: 'EN',
      onClick: switchLanguage
    }

    return [ru, en]
  }, [switchLanguage])

  return (
    <StyledLangSwitcher>
      <GooeyNav
        items={switcherContent}
        particleR={100}
        particleCount={15}
        timeVariance={300}
        animationTime={600}
        initialActiveIndex={0}
        particleDistances={[90, 10]}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </StyledLangSwitcher>
   );
}

export default LangSwitcher;

// export const switcherContent: GooeyNavItem[] = [
//   {
//     label: 'RU',
//     onClick: () => {}
//   },
//   {
//     label: 'EN',
//     onClick: () => {}
//   }
// ]