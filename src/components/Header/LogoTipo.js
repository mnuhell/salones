import React from 'react';
import styled from 'styled-components';
const imagen = 'logo';

const LogoContainer = styled.div`
    display: inline;
    position: absolute;
    overflow: hidden;
    left: 20px;
    top: 25%;

`;



const LogoTipo = () => {
    
    return ( 
        <LogoContainer className="header_logo">
            <img src={`./assets/${imagen}.svg`} width="200" alt="Salones thamesis" />
        </LogoContainer>
     );
}

export default LogoTipo;