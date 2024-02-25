import styled from "styled-components";

const StyledCard = styled.div`
  outline: 1px solid black;
  outline-offset: -1px;
`;

function Card() {
  return (
    <StyledCard>
      Card
    </StyledCard>
  );
}

export default Card;
