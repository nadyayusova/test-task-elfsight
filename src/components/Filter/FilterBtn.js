import styled from "styled-components";

const StyledFilterBtn = styled.div`
  label {
    display: block;
    padding: 8px 10px 7px;
    color: inherit;
    background-color: white;
    border: none;
    transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;
    cursor: pointer;
  }

  input:checked + label {
    color: white;
    background-color: #363636;
    cursor: default;
  }

  input:focus + label {
    box-shadow: 0 0 5px grey;
  }

  @media (hover: hover) {
    label:hover {
      box-shadow: 0 0 5px grey;
    }

    input:checked + label:hover {
      box-shadow: none;
    }
  }
`;

function FilterBtn({task, param, setPageNumber, name, index, text}) {
  return (
    <StyledFilterBtn>
      <input
        className="visually-hidden"
        type="radio"
        name={name}
        id={`${name}-${index}`}
        value={text}
        checked={param === text}
        onChange={(evt) => {
          setPageNumber(1);
          task(evt.target.value);
        }} />
      <label htmlFor={`${name}-${index}`}>
        {text.charAt(0).toUpperCase() + text.slice(1)}
      </label>
    </StyledFilterBtn>
  );
}

export default FilterBtn;
