import {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Empty from "./components/Main/Empty";
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
  const [fetchedData, setFetchedData] = useState({});
  const {info, results, error} = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  const fetchData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setFetchedData(data);
  };

  useEffect(() => {
    fetchData();
  }, [api]);

  return (
    <AppWrapper>
      <Header setSearch={setSearch} setPageNumber={setPageNumber} />
      {
        ((info && results) || error) &&
        <Main fetchResults={results} pageNumber={pageNumber} setPageNumber={setPageNumber} pageInfo={info} notFound={error} />
      }
      {
        ((!info || !results) && !error) &&
        <Empty text={'Loading...'} />
      }
    </AppWrapper>
  );
}

export default App;
