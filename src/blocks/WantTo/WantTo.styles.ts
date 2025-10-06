import styled from "styled-components";

const StyledWantTo = styled.div`

width: 100%;
display: flex;
flex-direction: column;

gap: 32px;

padding: 0 32px;

.want-to__content {
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  justify-items: center;
}

.want-to__content > *:last-child {
  width: 50%;
  grid-column: 1 / -1; 
  justify-self: center;
}

.custom-spotlight-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.want-to__item-description {
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
}

.want-to__item-title {
  width: 100%;
  text-align: center;
}

@media (max-width: 768px) {
  .want-to__content {
    width: 100%;
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }

  .want-to__content > *:last-child {
  width: 100%;
}
}
`;

export default StyledWantTo;