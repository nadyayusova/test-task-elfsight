import Card from "./Card";
import styled from "styled-components";

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

function Cards({fetchResults, setCardId, setShowModal}) {
  return (
    <StyledCards>
      {
        fetchResults
          ? fetchResults.map(
            (item, index) => (
              <Card
                key={item.id}
                cardData={item}
                index={index}
                setCardId={setCardId}
                setShowModal={setShowModal} />
            ))
          : 'Not Found'
      }
    </StyledCards>
  );
}

export default Cards;
