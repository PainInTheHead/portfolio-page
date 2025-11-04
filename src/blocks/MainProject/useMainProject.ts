import { useLanguage } from "../../context/LanguageContext";

type CardLanguageType = {
  description: string;
  cardContent: {
    title: string;
    subtitle: string;
    image: string;
    }[];
};

const useMainProject = () => {
  const { t } = useLanguage();

  const textsAbout = t.MainProject as CardLanguageType;

  return { textsAbout };
};

export default useMainProject;