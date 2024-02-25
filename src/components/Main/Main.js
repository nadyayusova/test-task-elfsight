import Container from "../Container";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 20px 0;
`;

function Main(props) {
  return (
    <StyledMain>
      <Container display="flex" direction="row" gap="20px">
        <Filter />
        <Cards fetchResults={props.fetchResults} />
      </Container>
    </StyledMain>
  );
}

export default Main;
