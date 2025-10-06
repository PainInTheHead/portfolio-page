import styled from "styled-components";

const StyledStackItem = styled.div`
  width: max-content;

  padding: 2px 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  .stack-item__spotlight-card {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    padding: 8px 20px;
  }

  .stack-item__title {
    font-size: 18px;
  }
`;

export default StyledStackItem;