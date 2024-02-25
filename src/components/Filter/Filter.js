import styled from "styled-components";

const StyledFilter = styled.div`
  width: 30%;
  max-width: 300px;
  min-width: 100px;

  outline: 1px solid black;
  outline-offset: -1px;
`;

function Filter() {
  return (
    <StyledFilter>
      Filter
    </StyledFilter>
  );
}

export default Filter;
