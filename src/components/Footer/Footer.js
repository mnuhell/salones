import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinHearts } from '@fortawesome/free-solid-svg-icons';

const WrapperFooter = styled.div`

    background: #283A55;
    display: grid;
    justify-content: center;
    justify-items: center;
    color: #F6CC94;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
`

const Footer = () => {
    return (
        <WrapperFooter> 
            <small>© Salones Thamesis <FontAwesomeIcon icon={faGrinHearts} /></small>
        </WrapperFooter>
     );
}
 
export default Footer;