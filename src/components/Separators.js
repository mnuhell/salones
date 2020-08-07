import React from 'react';
import styled from 'styled-components';

const Border = styled.div`

    height: 1.5rem;
    width: 100%;
    background: #283A55;
`;

const BorderBottom = styled.div`

    width: 30%;
    border-bottom: .05rem solid #F6CC94;
    margin: .5rem auto 1rem auto;
    border-radius: 50px;

`;


const Separators = () => {
    return ( 
        <>
            <Border className="separator">
                
            </Border>
            <BorderBottom className="separator_bottom"></BorderBottom>
        </>
     );
}
 
export default Separators;