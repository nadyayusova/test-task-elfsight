import Container from "../Container";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 20px 0;

  .cards-wrapper {
    width: 100%;
  }
`;

function Main(props) {
  return (
    <StyledMain>
      <Container display="flex" direction="row" gap="20px">
        <Filter />
        <div className="cards-wrapper">
          <Cards fetchResults={props.fetchResults} />
          <Pagination pageNumber={props.pageNumber} setPageNumber={props.setPageNumber} maxPage={props.maxPage} />
        </div>
      </Container>
    </StyledMain>
  );
}

export default Main;
