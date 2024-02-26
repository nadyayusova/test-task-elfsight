import {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Empty from "./components/Main/Empty";
import Modal from "./components/Modal/Modal";
import styled from "styled-components";

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  header,
  footer {
    flex-shrink: 0;
  }

  main {
    flex-grow: 1;
  }
`;

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const [type, setType] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [cardId, setCardId] = useState(0);

  const [fetchedData, setFetchedData] = useState({});
  const {info, results, error} = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}&type=${type}`;

  const fetchData = async () => {
    try {
      const response = await fetch(api);

      if (response.ok) {
        const data = await response.json();
        setFetchedData(data);
      } else {
        throw new Error('Data not found');
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [api]);

  return (
    <AppWrapper>
      <Header setSearch={setSearch} setPageNumber={setPageNumber} />
      {
        ((info && results) || error) &&
        <Main
          fetchResults={results}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          pageInfo={info}
          notFound={error}
          status={status}
          setStatus={setStatus}
          species={species}
          setSpecies={setSpecies}
          gender={gender}
          setGender={setGender}
          type={type}
          setType={setType}
          setCardId={setCardId}
          setShowModal={setShowModal} />
      }
      {
        ((!info || !results) && !error) &&
        <Empty text={'Loading...'} />
      }

      <Modal showModal={showModal} setShowModal={setShowModal} cardId={cardId} fetchResults={results} />
    </AppWrapper>
  );
}

export default App;
