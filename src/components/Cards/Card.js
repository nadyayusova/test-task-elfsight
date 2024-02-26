import CardImage from "./CardImage";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 5px grey;
    }
  }

  & > ul {
    display: flex;
    flex-direction: column;
    padding: 8px 10px;
    list-style-type: none;
  }

  li:not(:last-of-type) {
    margin-bottom: 3px;
  }
`;

function Card({cardData, index, setCardId, setShowModal}) {
  const cardClickHandler = () => {
    setCardId(index);
    setShowModal(true);
  };

  return (
    <StyledCard onClick={() => cardClickHandler()}>
      <CardImage imageUrl={cardData.image} name={cardData.name} />
      <ul>
        <li><b>{cardData.name || '-'}</b></li>
        <li>Status: {cardData.status || '-'}</li>
      </ul>
    </StyledCard>
  );
}

export default Card;
