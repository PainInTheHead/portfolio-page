import { colors } from "../../styles/theme/theme.constants";
import ElectricBorder from "../../ui/ElectricBorder/ElectricBorder";
import TextType from "../../ui/TextType/TextType";
import TrueFocus from "../../ui/TrueFocus/TrueFocus";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import StyledMyCard from "./MyCard.styled";
import useMyCard from "./useMyCard";

const MyCard = () => {
  const { cardTextContent } = useMyCard();

  return (
    <StyledMyCard className="max-width">
      <div className="my-card__name-container">
        <h2 className="my-card__name-text">
          {cardTextContent.name}
        </h2>

        <TrueFocus
          blurAmount={5}
          manualMode={false}
          animationDuration={1}
          pauseBetweenAnimations={1}
          borderColor={colors.primary}
          sentence={cardTextContent.blurText}
        />
      </div>

      <ElectricBorder
        speed={0.6}
        chaos={0.5}
        thickness={3}
        color={colors.primary}
        style={{ borderRadius: 16 }}
      >
        <div className="my-card__avatar-container">
          <img
            alt="avatar"
            src="/avatar.jpg"
            className="my-card__avatar"
          />
        </div>
      </ElectricBorder>

      <LangSwitcher />

      <div className="my-card__github-container">
        <TextType
          typingSpeed={30}
          showCursor={true}
          cursorCharacter="|"
          pauseDuration={1500}
          text={cardTextContent.welcomeAdaptiveMessages}
        />
      </div>
    </StyledMyCard>
   );
}

export default MyCard;