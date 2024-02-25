import CardImage from "./Image";
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

function Card({cardData}) {
  return (
    <StyledCard>
      <CardImage imageUrl={cardData.image} name={cardData.name} />
      <ul>
        <li><b>Name:</b> {cardData.name || '-'}</li>
        <li><b>Status:</b> {cardData.status || '-'}</li>
        <li><b>Species:</b> {cardData.species || '-'}</li>
        <li><b>Type:</b> {cardData.type || '-'}</li>
        <li><b>Gender:</b> {cardData.gender || '-'}</li>
      </ul>
    </StyledCard>
  );
}

export default Card;
