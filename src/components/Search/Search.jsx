import {useState, useRef} from "react";
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

  input::-webkit-input-placeholder { color: grey; }
  input:-moz-placeholder { color: grey; }
  input::-moz-placeholder { color: grey; }
  input:-ms-input-placeholder { color: grey; }
  input::-ms-input-placeholder { color: grey; }
  input::placeholder { color: grey; }

  button {
    display: block;
    padding: 8px 15px;
    font-size: inherit;
    color: white;
    background-color: #363636;
    border: none;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    user-select: none;
  }

  @media (hover: hover) {
    button:hover {
      box-shadow: 0 0 6px 1px grey;
    }
  }

  button:focus {
    outline: none;
    box-shadow: 0 0 6px 1px grey;
  }
`;

function Search({setSearch, setPageNumber}) {
  const [value, setValue] = useState('');
  const btnRef = useRef();

  const inputKeyDownHandler = (evt) => {
    if (evt.key === 'Enter') {
      btnRef.current.focus();
      return;
    }
  };

  const inputChangeHandler = (evt) => {
    setValue(evt.target.value)
    if (evt.target.value === '') {
      setSearch('');
      setPageNumber(1);
    }
  };

  const btnClickHandler = (evt) => {
    evt.preventDefault();
    setSearch(value);
    setPageNumber(1);
  };

  return (
    <StyledSearch>
      <form>
        <div className="form-content">
          <input
            onKeyDown={inputKeyDownHandler}
            onChange={inputChangeHandler}
            value={value}
            type="search"
            placeholder="Search by Name" />

          <button type="submit" ref={btnRef} onClick={btnClickHandler}>Search</button>
        </div>
      </form>
    </StyledSearch>
  );
}

export default Search;
