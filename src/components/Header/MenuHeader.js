import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
        
        color: #F6CC94;
        text-transform: uppercase;
        font-size: .8rem;
        display: inline-grid;
        grid-template-columns: repeat(5, auto);
        justify-items: center;
        justify-content: center;
        grid-gap: 2rem;
        margin: 30px 0 10px 0   ;
        width: 100%;

    li{
        position: relative;
        display: grid;
        padding: 15px 0 0 0;
        text-align: center;
        width: 100%;

        .icon-menu{
            position: absolute;
            top: 0;
            left: auto;
            right: auto;
            text-align: center;
            width: 100%;
            font-size: 10px;
            display: none;
        }

        &:hover.icon-menu{
            display: block;
        }
    }

`



const MenuHeader = () => {
    return ( 
        
            <Nav className="nav navigation">
                <li>
                    <FontAwesomeIcon className="icon-menu" icon={faStar} />
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <FontAwesomeIcon className="icon-menu" icon={faStar} />
                    <NavLink exact to="/bodas">Bodas</NavLink>
                </li>
                <li>
                    <FontAwesomeIcon className="icon-menu" icon={faStar} />
                    <NavLink exact to="/comuniones">Comuniones</NavLink>
                </li>
                <li>
                    <FontAwesomeIcon className="icon-menu" icon={faStar} />
                    <NavLink exact to="/categoring">Catering</NavLink>
                </li>
                <li>
                    <FontAwesomeIcon className="icon-menu" icon={faStar} />
                    <NavLink exact to="/contacto">Contácto</NavLink>
                </li>
            </Nav>
        
     );
}
 
export default MenuHeader;