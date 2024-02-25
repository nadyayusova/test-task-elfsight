import Container from "../Container";
import Filter from "../Filter/Filter";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 20px 0;

  .cards-wrapper {
    width: 100%;
  }
`;

function Empty({text}) {
  return (
    <StyledMain>
      <Container display="flex" direction="row" gap="20px">
        <Filter />

        {
          text &&
          <div className="cards-wrapper">{text}</div>
        }
      </Container>
    </StyledMain>
  );
}

export default Empty;
