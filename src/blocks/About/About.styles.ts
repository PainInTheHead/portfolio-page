import styled from "styled-components";

const StyledAbout = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};

  .about-border__container {
    width: 100%;
  }

  .star-border-container {
    padding: 2px !important;
  }

  .text-content {
    padding-left: 3px;
  }
  
  .about__main-content {
    width: 100%;

    display: flex;
    align-items: start;
    justify-content: center;
  }

  .about__content {
    display: flex;
    flex-direction: column;

    gap: 24px;
  }

  .left-content__container {
    display: flex;
    align-items: start;
    flex-direction: column;

    gap: 12px;
  }

  .left-content__list {
    display: flex;

    flex-direction: column;

    gap: 12px;

    font-size: 18px;
    list-style: none;
    text-align: start;
    line-height: 32px;
  }
  
  .right-content__container {
    align-self: center;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left-content__title {
    font-size: 42px;
  }
`;

export default StyledAbout;