import type { CSSProperties, FC } from "react";
import StarBorder from "../../ui/StarBorder/StarBorder";
import { basicContacts, contactsAll } from "./Contacts.constants";
import StyledContacts from "./Contacts.styles";
import GradientText from "../../ui/GradientText/GradientText";
import RotatingText from "../../ui/RotatingText/RotatingText";
import { div } from "motion/react-client";

type PropsType = {
  title?: string;
  isAll?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Contacts: FC<PropsType> = ({ title, isAll, style, className }) => {
  return (
    <StyledContacts
      style={style}
      className={className}
    >
      {title && (
        <div className="contacts__title">
          <h1>Future team</h1>

          <div className="contacts__title-text-wrapper">
            <RotatingText
              texts={[
                '💌 Mail Me',
                '💬 Chat Now',
                '🚀 Let\'s Connect',
                '⚡ Hit Me Up'
              ]}
              staggerFrom={"last"}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              initial={{ y: "100%" }}
              rotationInterval={2000}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            />
          </div>
        </div>
      )
      }

      <div className="contacts__content">
        {(isAll ? contactsAll : basicContacts).map((contact, index) => (
          <StarBorder
            key={index}
            as="a"
            speed="5s"
            color="magenta"
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="custom-star-border"
          >
            <contact.Icon />

            <span className="contact__title">{contact.title}</span>
          </StarBorder>
      ))}
      </div>
    </StyledContacts>
   );
}

export default Contacts;