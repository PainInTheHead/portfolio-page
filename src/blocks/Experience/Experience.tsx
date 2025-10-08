import ExperienceItem from "../../components/ExperienceItem/ExperienceItem";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import AnimatedContent from "../../ui/AnimatedContent/AnimatedContent";
import GradientText from "../../ui/GradientText/GradientText";
import { experienceData } from "./Experience.constant";
import StyledExperience from "./Experience.styles";

const Experience = () => {
  return (
    <AnimatedContent reverse>
      <StyledExperience className="max-width">
        <GradientText>
          <h1 className="experience__title">
            Experience
          </h1>
        </GradientText>

        <div className="experience__content">
          {experienceData.map((item, index) => (
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
    </AnimatedContent>
   );
}

export default Experience;
