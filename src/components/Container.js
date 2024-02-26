import styled from "styled-components";

const StyledContainer = styled.div`
  display: ${props => props.display || 'block'};
  flex-direction: ${props => props.direction || 'unset'};
  gap: ${props => props.gap || '0'};
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 120px;

  @media (max-width: 1159px) {
    padding: 0 40px;
  }

  @media (max-width: 1023px) {
    gap: 20px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

function Container(props) {
  return (
    <StyledContainer {...props} />
  );
}

export default Container;
