import { colors } from "../../styles/theme/theme.constants";
import ElectricBorder from "../../ui/ElectricBorder/ElectricBorder";
import TextType from "../../ui/TextType/TextType";
import TrueFocus from "../../ui/TrueFocus/TrueFocus";
import { arrayWelcomeText } from "./MyCard.constants";
import StyledMyCard from "./MyCard.styled";

const MyCard = () => {
  return (
    <StyledMyCard className="max-width">
      <div className="my-card__name-container">
        <h2 className="my-card__name-text">
          IL'YA BRAGIN
        </h2>

        <TrueFocus
          blurAmount={5}
          manualMode={false}
          animationDuration={1}
          pauseBetweenAnimations={1}
          borderColor={colors.primary}
          sentence="Creative Frontend-Developer"
        />
      </div>

      <ElectricBorder
        color={colors.primary}
        speed={0.6}
        chaos={0.5}
        thickness={3}
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

      <div className="my-card__github-container">
        <TextType
          typingSpeed={30}
          showCursor={true}
          cursorCharacter="|"
          pauseDuration={1500}
          text={arrayWelcomeText}
        />
      </div>
    </StyledMyCard>
   );
}

export default MyCard;