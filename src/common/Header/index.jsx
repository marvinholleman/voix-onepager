import React from 'react';
import ReactDOM from 'react-dom';

import HeroImage from '../HeroImage';
import Menu from '../Menu';
import lookatlogo from '../../static/logo.svg';


import { HeaderContainer, LogoContainer, Logo, HeaderContentContainer, HeaderTitle, HeaderContent, ContentWrapper, HeaderDivider, PresLink } from './styled';

const Header = () => (
    <HeaderContainer>
        <Menu />
        <HeroImage />
        <HeaderContentContainer>
            <ContentWrapper>
                <HeaderTitle>Voix</HeaderTitle>
                <HeaderContent>Wij zijn VOIX. Een gedreven groep ontwerpers en developers van de Hogeschool Rotterdam. In opdracht van Gemeente Rotterdam hebben wij een concept bedacht om een dienst te verbeteren door middel van Voice Assistent. Prestatie gericht en weten van aanpakken, dat is waar wij goed in zijn!
</HeaderContent>
            </ContentWrapper>
        </HeaderContentContainer>
    </HeaderContainer>
);

export default Header;
