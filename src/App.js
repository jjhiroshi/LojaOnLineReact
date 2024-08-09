import Header from '../src/components/Header/header.js'
import Pesquisa from '../src/components/Pesquisa/Pesquisa.js'
import styled from 'styled-components'
import UltimosLancamentos from '../src/components/UltimosLancamentos/UltimosLancamentos.js'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
