import styled from "styled-components";

const StyledMainProject = styled.div`
  width: 100%;
  min-height: 80vh;

  position: relative;

  display: flex;
  align-items: end;

  margin-bottom: 50svh;


  .main-project__left-block {
    width: 40svw;

    display: flex;
    flex-direction: column;

    gap: 24px;

    /* margin-bottom: 60px; */
    margin-left: 10svw;
  }

  .main-project__title {
    margin: 0;
    padding-left: 3px;
  }

  .main-project__description {
    font-size: 18px;
    line-height: 1.2;
    font-weight: 500;
  }

  .main-project__card {
    padding: 10px;
    background: ${({ theme }) => theme.colors.background};

  .main-project__card-image {
    filter: brightness(0.7);
    transition: filter 0.3s ease;
  }

  &:hover .main-project__card-image {
    filter: brightness(1);
    }
  }

  .main-project__card-image-container {
    width: 100%;
    height: 87%;

    border-radius: 6px;

    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-project__card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

  .main-project__card-content {
    margin-bottom: 8px;
  }

  @media (max-width: 1000px) {
    .card-swap-container {

      width: 300px !important;
    }
  }

  @media (max-width: 650px) {
align-items: start;

.card-swap-container {
  width: 300% !important;
  transform: scale(0.7) translate(25%, 25%);
}

    .main-project__left-block {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 24px;

    margin-bottom: 0;
    margin-left: 0;

    padding: 0 32px;
    }
  }

  @media (max-width: 420px) {
    .card-swap-container {
      width: 260% !important;
      
    }
  }
`;
export default StyledMainProject;