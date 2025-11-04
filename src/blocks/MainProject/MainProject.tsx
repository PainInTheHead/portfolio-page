import CardSwap, { Card } from "../../ui/CardSwap/CardSwap";
import GradientText from "../../ui/GradientText/GradientText";
import { projectCards } from "./MainProject.constants";
import StyledMainProject from "./MainProject.styles";
import useMainProject from "./useMainProject";

const MainProject = () => {
  const { textsAbout } = useMainProject();

  return (
    <StyledMainProject>
      <div className="main-project__left-block">
        <GradientText className="main-project__title">
          <h1>
            SitterTree – Web App
          </h1>
        </GradientText>

        <p className="main-project__description">
          {textsAbout.description}
        </p>
      </div>

      <div className="main-project__right-block">
        <CardSwap
          delay={5000}
          cardDistance={30}
          pauseOnHover={false}
          verticalDistance={40}
        >
          {textsAbout.cardContent.map((card, index) => (
            <Card key={index}
              className="main-project__card"
            >
              <div className="main-project__card-content">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>

              <div className="main-project__card-image-container">
                <img
                  src={card.image}
                  alt={card.title}
                  className="main-project__card-image"
                />
              </div>
            </Card>
            ))}
        </CardSwap>
      </div>
    </StyledMainProject>
   );
}

export default MainProject;