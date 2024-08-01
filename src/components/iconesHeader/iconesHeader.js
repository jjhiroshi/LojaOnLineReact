import Perfil from '../../images/perfil.svg';
import Sacola from '../../images/sacola.svg';
import styled from 'styled-components';

const icones = [Perfil, Sacola];

const Icones = styled.ul`
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Icone = styled.li`
    margin-right: 30px;
    width: 25px;
`

function IconesHeader() {
    return (
        <Icones>
            { icones.map ( (icone) => (
              <Icone><img  src={icone} alt='icone perfil e sacola'></img></Icone>
            ))}
          </Icones>
    )
}

export default IconesHeader;