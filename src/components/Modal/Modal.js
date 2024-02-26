import {useEffect, useRef} from "react";
import CardImage from "../Cards/CardImage";
import styled from "styled-components";

const StyledModal = styled.dialog`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  padding: 15px;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.7);
  }
  

  & > ul {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    list-style-type: none;
  }

  li:not(:last-of-type) {
    margin-bottom: 3px;
  }

  button {
    display: block;
    width: 100%;
    max-width: 300px;
    margin: 12px auto 5px;
    padding: 8px 10px;
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
      box-shadow: 0 0 5px grey;
    }
  }
`;

function Modal({showModal, setShowModal, cardId, fetchResults}) {
  const modalRef = useRef();

  useEffect(() => {
    if (!modalRef.current) return;

    if (showModal) {
      document.body.style.overflow = 'hidden';
      modalRef.current.showModal();
    } else {
      document.body.style.overflow = 'visible';
      modalRef.current.close();
    }
  }, [showModal]);

  return (
    <StyledModal ref={modalRef} onClose={() => setShowModal(false)}>
      {
        fetchResults
          ? (
            <>
              <CardImage
                imageUrl={fetchResults[cardId]?.image || ''}
                name={fetchResults[cardId]?.name} />
              <ul>
                <li><b>Name:</b> {fetchResults[cardId]?.name || '-'}</li>
                <li><b>Status:</b> {fetchResults[cardId]?.status || '-'}</li>
                <li><b>Species:</b> {fetchResults[cardId]?.species || '-'}</li>
                <li><b>Type:</b> {fetchResults[cardId]?.type || '-'}</li>
                <li><b>Gender:</b> {fetchResults[cardId]?.gender || '-'}</li>
                <li><b>Location:</b> {fetchResults[cardId]?.location.name || '-'}</li>
                <li><b>Origin:</b> {fetchResults[cardId]?.origin.name || '-'}</li>
              </ul>
            </>
          )
          : (
            <p>'Not Found'</p>
          )
      }
      <button onClick={() => setShowModal(false)}>Close</button>

    </StyledModal>
  );
}

export default Modal;
