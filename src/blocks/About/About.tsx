import StyledAbout from "./About.styles";
import GradientText from "../../ui/GradientText/GradientText";
import useAbout from "./useAbout";

const About = () => {
  const { textsAbout } = useAbout();

  return (
    // <AnimatedContent>
    <StyledAbout className="max-width">
      <div className="about__content">
        <GradientText>
          <h1>
            {textsAbout.title}
          </h1>
        </GradientText>

        <div className="about__main-content">
          <div className="left-content__container">

            <div className="left-content__text">
              <ul className="left-content__list">
                {textsAbout.cardContent.map((item, index) => (
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
   );
}

export default About;