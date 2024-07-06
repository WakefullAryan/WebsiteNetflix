import './App.css';
import styled from "styled-components"

const StyledPage = styled.div`
  background-color: black;
  color: white;
  display: flex;
  height: 100vh;
  width: 100vw;
`

const StyledTest = styled.p`
  margin-top: 1000px;
  color: white;
`

function App() {
  return (
    <StyledPage>
      <p>test</p>
      <StyledTest>hi</StyledTest>
    </StyledPage>
  );
}

export default App;
