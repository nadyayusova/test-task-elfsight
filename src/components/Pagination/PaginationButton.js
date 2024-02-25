import styled from "styled-components";

const StyledPaginationButton = styled.button`
  min-width: 40px;
  padding: 11px 10px 10px;
  color: inherit;
  background-color: white;
  border: none;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  @media (max-width: 459px) {
    min-width: 20px;
    padding: 8px 5px;
    font-size: 10px;
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 5px grey;
    }
  }

  &:disabled {
    color: lightgrey;
    pointer-events: none;
  }

  &[data-active] {
    color: white;
    background-color: #363636;
  }

  &[data-center] {
    color: white;
    background-color: #363636;
  }
`;

function PaginationButton(props) {
  return (
    <StyledPaginationButton {...props} type={"button"} />
  );
}

export default PaginationButton;
