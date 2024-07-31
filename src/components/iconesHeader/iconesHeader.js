import Perfil from '../../images/perfil.svg';
import Sacola from '../../images/sacola.svg';
import './iconesHeader.css';

const icones = [Perfil, Sacola];

function IconesHeader() {
    return (
        <ul className='icones'>
            { icones.map ( (icone) => (
              <li className='icone'><img  src={icone} alt='icone perfil e sacola'></img></li>
            ))}
          </ul>
    )
}

export default IconesHeader;