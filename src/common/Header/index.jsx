import React from 'react';
import ReactDOM from 'react-dom';

import lookatlogo from '../../static/lookatlogo.PNG';

import { HeaderContainer, LogoContainer, Logo, HeaderContentContainer, HeaderTitle, HeaderContent, ContentWrapper, HeaderDivider } from './styled';

const Header = () => (
    <HeaderContainer>
        <LogoContainer>
            <Logo src={lookatlogo} />
        </LogoContainer>
        <HeaderContentContainer>
            <ContentWrapper>
                <HeaderTitle>Koptext</HeaderTitle>
                <HeaderContent>Duis eget eros fermentum, posuere ligula vitae, faucibus ligula. Ut vel nisl odio. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Praesent metus lectus, faucibus id ex id, hendrerit
        dignissim massa. Praesent gravida tristique hendrerit. Donec semper dui vitae enim laoreet,
        sit amet fermentum felis laoreet. Fusce ut metus vel mauris rutrum iaculis. Phasellus maximus
        metus non venenatis pretium. Cras nec viverra dui. Mauris laoreet urna auctor, faucibus justo sit

amet, mattis nisl.</HeaderContent>
            </ContentWrapper>
        </HeaderContentContainer>
        <HeaderDivider />
    </HeaderContainer>
);

export default Header;
