import { useLanguage } from "../../context/LanguageContext";

type CardLanguageType = {
  title: string;
  cardContent: {
    title: string;
    description: string
  }[];
};

const useWantTo = () => {
  const { t } = useLanguage();

  const textsWantTo = t.WantTo as CardLanguageType;

  return { textsWantTo };
};

export default useWantTo;