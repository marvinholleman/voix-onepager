import React from 'react';
import ReactDOM from 'react-dom';

import * as Scroll from 'react-scroll';

import { MenuContainer, MenuItem, MenuLogo } from './styled';

const scroll = Scroll.animateScroll;

const Menu = () => (
    <MenuContainer>
        <MenuLogo>Voix</MenuLogo>
        <MenuItem first onClick={() => scroll.scrollTo(600)}>Connect</MenuItem>
        <MenuItem onClick={() => scroll.scrollTo(1800)}>Concept</MenuItem>
        <MenuItem onClick={() => scroll.scrollTo(3100)}>Realiseren</MenuItem>
    </MenuContainer>
);

export default Menu;
