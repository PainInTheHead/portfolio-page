import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import GradientText from "../../ui/GradientText/GradientText";
import { wantToContent } from "./WantTo.constants";
import StyledWantTo from "./WantTo.styles";

const WantTo = () => {
  return (
    <StyledWantTo className="max-width">
      <GradientText className="want-to__title">
        <h1>
          Want to
        </h1>
      </GradientText>

      <div className="want-to__content">
        {wantToContent.map((item, index) => (
          <SpotlightCard key={index}
            className="custom-spotlight-card experience-card glass-effect"
          >

            <h2 className="want-to__item-title">
              {item.title}
            </h2>

            <p className="want-to__item-description">
              {item.description}
            </p>
          </SpotlightCard>
        ))}
      </div>
    </StyledWantTo>
   );
}

export default WantTo;