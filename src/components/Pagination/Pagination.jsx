import PaginationButton from "./PaginationButton";
import styled from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px 0 20px;

  @media (max-width: 767px) {
    gap: 10px;
  }

  & > span {
    user-select: none;
  }
`;

function Pagination(props) {
  const prev = () => {
    if (props.pageNumber === 1) {
      return;
    }

    props.setPageNumber((page) => page - 1);
  }

  const next = () => {
    if (props.pageNumber === props.maxPage) {
      return;
    }

    props.setPageNumber((page) => page + 1);
  }

  const setFirst = () => {
    props.setPageNumber(1);
  }

  const setLast = () => {
    props.setPageNumber(props.maxPage);
  }

  return (
    <StyledPagination>
      <PaginationButton
        onClick={prev}
        disabled={props.pageNumber === 1 ? "disabled" : ""}>
        Prev
      </PaginationButton>

      <PaginationButton
        onClick={setFirst}
        data-active={props.pageNumber === 1 ? "" : null}
        disabled={props.pageNumber === 1 ? "disabled" : ""}>
        1
      </PaginationButton>

      {props.pageNumber > 2 && <span>..</span>}

      {
        (props.pageNumber !== 1 && props.pageNumber !== props.maxPage) &&
        <PaginationButton data-center disabled>{props.pageNumber}</PaginationButton>
      }

      {props.pageNumber < props.maxPage - 1 && <span>..</span>}

      {
        props.maxPage > 1 &&
        <PaginationButton
          onClick={setLast}
          data-active={props.pageNumber === props.maxPage ? "" : null}
          disabled={props.pageNumber === props.maxPage ? "disabled" : ""}>
          {props.maxPage}
        </PaginationButton>
      }

      <PaginationButton
        onClick={next}
        disabled={props.pageNumber === props.maxPage ? "disabled" : ""}>
        Next
      </PaginationButton>
    </StyledPagination>
  );
}

export default Pagination;
