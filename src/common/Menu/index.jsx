import React from 'react';
import ReactDOM from 'react-dom';

import * as Scroll from 'react-scroll';

import { MenuContainer, MenuItem, MenuLogo } from './styled';

const scroll = Scroll.animateScroll;

const Menu = () => (
    <MenuContainer>
        <MenuLogo>Voix</MenuLogo>
        <MenuItem first onClick={() => scroll.scrollTo(550)}>Connect</MenuItem>
        <MenuItem onClick={() => scroll.scrollTo(2950)}>Concept</MenuItem>
        <MenuItem onClick={() => scroll.scrollTo(5350)}>Realiseren</MenuItem>
        <MenuItem onClick={() => scroll.scrollTo(7050)}>Aanbevelingen</MenuItem>
    </MenuContainer>
);

export default Menu;
