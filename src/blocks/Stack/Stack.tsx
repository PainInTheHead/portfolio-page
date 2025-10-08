import type { FC } from "react";

import GradientText from "../../ui/GradientText/GradientText";
import { allStacks } from "./Stack.constants";
import StyledStack from "./Stack.styles";
import type { CurrentStackENUM } from "./Stack.type";
import StackItem from "../../components/StackItem/StackItem";

const Stack: FC<{ stack: CurrentStackENUM }> = ({ stack }) => {
  const currentStack = allStacks[stack];

  return (
    <StyledStack className="max-width">
      <GradientText>
        <h1 className="stack__title">
          {currentStack.title}
        </h1>
      </GradientText>

      <div className="stack__field-items-holder">
        {currentStack.tech.map((item, index) => (
          <StackItem
            key={index}
            {...item}
          />
              ))}
      </div>
    </StyledStack>
   );
}

export default Stack;