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
                <HeaderContent>Laaggeletterde hebben vaak last van handelingen waarbij veel administratieve zaken te pas komen. Zoals gegevens invoeren of notificaties begrijpen zoals E-mails of brieven van de overheid. Ook is de doelgroep gevoelig voor acute veranderingen, dit gaat gepaard met stress.
</HeaderContent>
            </ContentWrapper>
        </HeaderContentContainer>
    </HeaderContainer>
);

export default Header;
