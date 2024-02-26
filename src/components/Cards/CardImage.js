import styled from "styled-components";

const StyledCardImage = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  & img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function CardImage({imageUrl, name}) {
  return (
    <StyledCardImage>
      <img src={imageUrl} width="300" height="300" alt={name} />
    </StyledCardImage>
  );
}

export default CardImage;
