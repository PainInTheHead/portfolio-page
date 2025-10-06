import { aboutItems } from "./About.constants";
import StyledAbout from "./About.styles";
import GradientText from "../../ui/GradientText/GradientText";
import AnimatedContent from "../../ui/AnimatedContent/AnimatedContent";

const About = () => {
  return (
    <AnimatedContent>
      <StyledAbout>
        <div className="about__content">
          <GradientText>
            <h1>
              {" About Me"}
            </h1>
          </GradientText>

          <div className="about__main-content">
            <div className="left-content__container">

              <div className="left-content__text">
                <ul className="left-content__list">
                  {aboutItems.map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </StyledAbout>
    </AnimatedContent>
   );
}

export default About;