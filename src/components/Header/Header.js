import React from 'react';
import MenuHeader from './MenuHeader';
import LogoTipo from './LogoTipo';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    justify-items: center;
    vertical-align: middle;
    padding: 20px 0px 10px 0;
    position: relative;
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