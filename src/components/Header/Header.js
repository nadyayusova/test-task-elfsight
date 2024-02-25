import Search from "../Search/Search";
import Container from "../Container";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 20px 0;
  text-align: center;

  @media (max-width: 767px) {
    h1 {
      font-size: 24px;
    }
  }
`;

function Header({setSearch, setPageNumber}) {
  return (
    <StyledHeader>
      <Container display="flex" direction="column" gap="20px">
        <h1>Rick and Morty API Demo</h1>
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      </Container>
    </StyledHeader>
  );
}

export default Header;
