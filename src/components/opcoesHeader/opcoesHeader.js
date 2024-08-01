import styled from 'styled-components';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS','MINHA ESTANTE'];

const Opcoes = styled.ul`
  display: flex;
  margin-left: 30px;
`
const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  padding:  0 5px;
  cursor: pointer;
  min-width: 120px;
`

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
              <Opcao>{texto}</Opcao>
            ) )}
          </Opcoes>
    );
}

export default OpcoesHeader;