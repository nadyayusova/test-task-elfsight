import styled from "styled-components";

const StyledSearch = styled.div`
  text-align: center;

  .form-content {
    display: flex;
    justify-content: center;
  }

  input {
    min-width: 390px;
    padding: 5px 12px;
    border: none;
    transition: box-shadow 0.3s ease;
  }

  @media (hover: hover) {
    input:hover {
      box-shadow: 0 0 5px grey;
    }
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 5px grey;
  }

  @media (max-width: 767px) {
    .form-content {
      justify-content: center;
    }

    input {
      flex-grow: 1;
      min-width: unset;
      max-width: 300px;
    }
  }
`;

function Search({setSearch, setPageNumber}) {
  return (
    <StyledSearch>
      <form action="">
        <div className="form-content">
          <input
            onChange={(evt) => {
              setSearch(evt.target.value);
              setPageNumber(1);
            }}
            type="text"
            placeholder="Search by Name" />
        </div>
      </form>
    </StyledSearch>
  );
}

export default Search;
