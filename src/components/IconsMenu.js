import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fadeInDown } from 'react-animations';


const bounceAnimation = keyframes`${fadeInDown}`;

const BounceDiv = styled.span`
    animation: 4s ${bounceAnimation};
`;  


const IconsMenu = ( {icon} ) => {

    return (
        <BounceDiv className="icon-menu">
            <FontAwesomeIcon icon={icon} />
        </BounceDiv>
    )
}


export default IconsMenu;