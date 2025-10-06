import type { FC } from "react";
import type { ExperienceItemType } from "../../blocks/Experience/Experience.constant";
import StyledExperienceItem from "./ExperienceItem.styles";

type PropsType = {
  item: ExperienceItemType
}

const ExperienceItem: FC<PropsType> = ({ item }) => {
  return (
    <StyledExperienceItem>
      <h3 className="experience-item__title">{item.title}</h3>

      <h4 className="experience-item__subtitle">{item.subTitle}</h4>

      <ul className="experience-item__list">
        {item.listItems.map((item, index) => (
          <li key={index}
            className="experience-item__list-item"
          >
            {item}
          </li>
        ))}
      </ul>
    </StyledExperienceItem>
   );
}

export default ExperienceItem;