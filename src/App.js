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
  return (
    <AppWrapper>
      <Header />
      <Main />
    </AppWrapper>
  );
}

export default App;
