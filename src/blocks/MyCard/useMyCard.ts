import { useLanguage } from "../../context/LanguageContext";

type CardLanguageType = {
  name: string;
  blurText: string;
  welcomeAdaptiveMessages: string[];
};

const useMyCard = () => {
  const { t } = useLanguage();

  const cardTextContent = t.myCard as CardLanguageType;

  return { cardTextContent };
};

export default useMyCard;