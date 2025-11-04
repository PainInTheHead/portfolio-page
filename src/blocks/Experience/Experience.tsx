import ExperienceItem from "../../components/ExperienceItem/ExperienceItem";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import GradientText from "../../ui/GradientText/GradientText";
import StyledExperience from "./Experience.styles";
import useExperience from "./useExperience";

const Experience = () => {
  const { textsAbout } = useExperience();

  return (
    <StyledExperience className="max-width">
      <GradientText>
        <h1 className="experience__title">
          {textsAbout.title}
        </h1>
      </GradientText>

      <div className="experience__content">
        {textsAbout.cardsContent.map((item, index) => (
          <SpotlightCard key={index}
            className="custom-spotlight-card experience-card glass-effect"
          >
            <ExperienceItem
              item={item}
            />
          </SpotlightCard>
          ))}
      </div>
    </StyledExperience>
   );
}

export default Experience;
