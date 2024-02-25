import {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
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
  // const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const {info, results} = fetchedData;

  // let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  let api = 'https://rickandmortyapi.com/api/character';

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
      <Header />
      <Main fetchResults={results} />
    </AppWrapper>
  );
}

export default App;
