import styled from "styled-components";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";

const StyledStack = styled.div`
  width: 100%;

  
  padding: 0 32px 32px 32px;

  display: flex;
  flex-direction: column;

  gap: 18px;

  .stack__title {
    padding-left: 3px
  }
  
  .custom-spotlight-card {
    width: 100%;

    display: flex;
    flex-direction: column;
  
    gap: 32px;
  }


  .stack__content {
    display: flex;
    flex-direction: column;

    gap: 24px;
  }

  .stack__field {
    display: flex;
    flex-direction: column;

    gap: 12px;
  }

  .stack__field-items-holder {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    gap: 8px;
  }

  .stack__field-title {
    font-size: 16px;
  }

  .animated-gradient-text {
    margin: 0
  }
`;

export default StyledStack;