import type { IconType } from "react-icons";
import StyledStackItem from "./StackItem.styles";

import type { FC } from "react";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import ShinyText from "../../ui/ShinyText/ShinyText";

export type StackItemType = {
  Icon: IconType;
  title: string;
}

const StackItem: FC<StackItemType> = ({ Icon, title }) => {
  return (
    <StyledStackItem>
      <SpotlightCard className="stack-item__spotlight-card glass-effect">
        <Icon className="stack-item__icon"
          size={18}
        />

        <ShinyText
          speed={3}
          text={title}
          disabled={false}
          className="stack-item__title"
        />
      </SpotlightCard>
    </StyledStackItem>
   );
}

export default StackItem;