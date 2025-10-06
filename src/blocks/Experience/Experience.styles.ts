import styled from "styled-components";

const StyledExperience = styled.div`
  width: 100%;


  display: flex;
  flex-direction: column;
    
  gap: 32px;

  padding: 0 32px 32px 32px;

  /* .experience-card {
    width: 100%;

    display: flex;
    flex-direction: column;
    
    gap: 12px;
  } */

  .experience-card {
    width: auto;
  }

  /* .experience__content {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    gap: 32px;
  } */

    .experience__title {
      padding-left: 3px;
    }

.experience__content {
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  justify-items: center;
}

.experience__content > *:last-child {
  grid-column: 1 / -1; 
  justify-self: center;
}



@media (max-width: 768px) {
  .experience__content {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .experience__content > *:last-child {
    grid-column: auto;
  }
}

`;

export default StyledExperience;