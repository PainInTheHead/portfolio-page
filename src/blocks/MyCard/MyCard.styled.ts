import styled from "styled-components";

const StyledMyCard = styled.div`
  width: 100%;
  min-height: 90vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing.xl};

  gap: 6vh;

  .pixelated-image-card {
    border: none;
    border-radius: 50%;
    overflow: hidden;
    background: none;
  }

  .my-card__name-container {
    display: flex;

    align-items: center;
    flex-direction: column;
    justify-content: center;

    gap: 8px;
  }

  .my-card__github,
  .my-card__profession {
    font-size: 32px;
    font-weight: 700;
  }

  .my-card__avatar-container {
    width: 250px;
    height: 250px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    transition: box-shadow 0.3s ease;
    box-shadow: 0 0 220px 40px ${({ theme }) => theme.colors.secondary}40;
  }

  .my-card__avatar {
    width: 100%;
    height: 100%;

    object-fit: cover;
    border-radius: 50%;
  }

  .electric-border  {
    padding: 4px;
    border-radius: 50% !important;
  }

  .text-type {
    max-width: 70vw;

    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }

  .my-card__github-link {
    display: inline;
  }

  .focus-word {
    font-size: 30px;
  }

  .my-card__github-container {
    display: flex;
    align-items: start;
    flex-direction: column;

    min-height: 62px;

    gap: 16px;
  }

  .my-card__name-text {
    font-size: 32px;
  }
`;

export default StyledMyCard;