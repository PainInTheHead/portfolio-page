import styled from "styled-components";

const StyledContacts = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 48px;

  .contacts__title {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 12px;
  }

  .contacts__title-text-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px 12px;

    border-radius: 18px;
    background: ${({ theme }) => theme.colors.backgroundViolet};

    overflow: hidden;
  }

  .contacts__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    gap: 32px;
  }

  .inner-content {
    width: max-content;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 6px;

    padding: 10px 22px;
  }

  .custom-star-border {
    cursor: pointer;
  }

  .text-rotate {
    font-size: 24px;
    font-weight: 700;
  }
`;

export default StyledContacts;