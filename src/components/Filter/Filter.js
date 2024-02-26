import Gender from "./Categories/Gender";
import Species from "./Categories/Species";
import Status from "./Categories/Status";
import styled from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  max-width: 300px;
  min-width: 100px;

  @media (max-width: 767px) {
    width: 100%;
    max-width: unset;
    min-width: unset;
  }

  b {
    display: block;
    font-size: large;
    text-align: center;
  }

  button {
    display: block;
    width: 100%;
    max-width: 300px;
    margin: 12px auto 15px;
    padding: 8px 10px;
    font-size: inherit;
    color: inherit;
    background-color: white;
    border: none;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    user-select: none;
  }

  @media (hover: hover) {
    button:hover {
      box-shadow: 0 0 5px grey;
    }
  }
`;

function Filter({status, setStatus, species, setSpecies, gender, setGender, setPageNumber}) {
  const clearFilter = () => {
    setStatus('');
    setSpecies('');
    setGender('');
    setPageNumber(1);
  };

  return (
    <StyledFilter>
      <b>Filters</b>
      <button type="button" onClick={clearFilter}>Clear filters</button>
      <Status status={status} setStatus={setStatus} setPageNumber={setPageNumber} />
      <Species species={species} setSpecies={setSpecies} setPageNumber={setPageNumber} />
      <Gender gender={gender} setGender={setGender} setPageNumber={setPageNumber} />
    </StyledFilter>
  );
}

export default Filter;
