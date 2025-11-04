import { useLanguage } from "../../context/LanguageContext";

type CardLanguageType = {
  title: string;
  cardContent: string[];
};

const useAbout = () => {
  const { t } = useLanguage();

  const textsAbout = t.About as CardLanguageType;

  return { textsAbout };
};

export default useAbout;