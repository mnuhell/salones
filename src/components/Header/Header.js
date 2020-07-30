import React from 'react';
import MenuHeader from './MenuHeader';
import LogoTipo from './LogoTipo';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    justify-items: center;
    background: #283A55;
    vertical-align: middle;
    padding: 30px 0px 0 0;
`
const Header = () => {
    return ( 
        <Wrapper className="header">
            <LogoTipo />
            <MenuHeader />
        </Wrapper>
     );
}
 
export default Header;