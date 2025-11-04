import { useLanguage } from "../../context/LanguageContext";
import type { ExperienceItemType } from "./Experience.constant";

type CardLanguageType = {
  title: string;
  cardsContent: ExperienceItemType[];
};

const useExperience = () => {
  const { t } = useLanguage();

  const textsAbout = t.Experience as CardLanguageType;

  return { textsAbout };
};

export default useExperience;