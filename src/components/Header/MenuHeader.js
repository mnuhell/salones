import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import IconsMenu from '../IconsMenu';

const Nav = styled.nav`
        
        text-transform: uppercase;
        font-size: .8rem;
        display: inline-grid;
        grid-template-columns: repeat(5, auto);
        justify-items: center;
        justify-content: center;
        grid-gap: 2rem;
        margin: 10px 0 10px 0;
        width: 100%;

    li{
        position: relative;
        display: grid;
        padding: 15px 0 0 0;
        text-align: center;
        width: 100%;
        transition: color .4s ease-in-out;
        a{
            font-family: 'Thasadith', sans-serif;
        }

        .icon-menu{
            position: absolute;
            top: -5px;
            left: auto;
            right: auto;
            text-align: center;
            width: 100%;
            font-size: .8rem;
        }

        &:hover {
            color: #4D6983;

        }
    }

`



const MenuHeader = (icon) => {
    return ( 
        
            <Nav className="nav navigation">
                <li>
                    <IconsMenu icon={faStar} />
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <IconsMenu icon={faStar} />
                    <NavLink exact to="/bodas">Bodas</NavLink>
                </li>
                <li>
                <IconsMenu icon={faStar} />
                    <NavLink exact to="/comuniones">Comuniones</NavLink>
                </li>
                <li>
                <IconsMenu icon={faStar} />
                    <NavLink exact to="/categoring">Eventos</NavLink>
                </li>
                <li>
                <IconsMenu icon={faStar} />
                    <NavLink exact to="/contacto">Contácto</NavLink>
                </li>
            </Nav>
        
     );
}
 
export default MenuHeader;