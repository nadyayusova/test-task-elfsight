import styled from "styled-components";

const StyledFilter = styled.div`
  details {
    margin-top: 10px;
  }

  summary {
    padding: 7px 0;
    cursor: pointer;
  }
  
  details > div {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 5px 0;
    list-style-type: none;
  }

  li {
    padding: 4px 7px;
    border: 1px solid #363636;
    cursor: pointer;
  }
`;

function FilterWrapper(props) {
  return (
    <StyledFilter {...props} />
  );
}

export default FilterWrapper;
