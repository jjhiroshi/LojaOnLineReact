import styled from 'styled-components';

import Logo from '../logo/logo.js';
import OpcoesHeader from '../opcoesHeader/opcoesHeader.js';
import IconesHeader from '../iconesHeader/iconesHeader.js';

const HeaderContainer = styled.header`
    background-color: #FFF;
    padding: 10px;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    );
}

export default Header;