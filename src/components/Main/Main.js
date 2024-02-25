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
  const {
    fetchResults,
    pageNumber,
    setPageNumber,
    pageInfo,
    notFound,
  } = props;

  return (
    <StyledMain>
      <Container display="flex" direction="row" gap="20px">
        <Filter />

        {
          fetchResults &&
          <div className="cards-wrapper">
            <Cards fetchResults={fetchResults} />
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} maxPage={pageInfo.pages} />
          </div>
        }

        {
          notFound &&
          <div className="cards-wrapper">Not Found</div>
        }
      </Container>
    </StyledMain>
  );
}

export default Main;
