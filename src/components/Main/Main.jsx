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

  @media (max-width: 767px) {
    .cards-wrapper {
      max-width: 300px;
      margin: 20px auto 0;
    }
  }
`;

function Main(props) {
  const {
    fetchResults,
    pageNumber,
    setPageNumber,
    pageInfo,
    notFound,
    status,
    setStatus,
    species,
    setSpecies,
    gender,
    setGender,
    type,
    setType,
    setCardId,
    setShowModal,
  } = props;

  return (
    <StyledMain>
      <Container data-display={"flex"} data-direction={"row"} data-gap={"40px"}>
        <Filter
          status={status}
          setStatus={setStatus}
          species={species}
          setSpecies={setSpecies}
          gender={gender}
          setGender={setGender}
          setPageNumber={setPageNumber}
          type={type}
          setType={setType} />

        {
          fetchResults &&
          <div className="cards-wrapper">
            <Cards
              fetchResults={fetchResults}
              setCardId={setCardId}
              setShowModal={setShowModal} />
            <Pagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              maxPage={pageInfo.pages} />
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
