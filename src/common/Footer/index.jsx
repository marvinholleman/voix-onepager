import React from 'react';
import styled from 'styled-components';

import groupimage from '../../static/group.jpeg';

const FooterContainer = styled.div`
    background-color: #56c09b;
    display: flex;
    justify-content: center;
    height: 175px;
    align-items: center;
    
`;

const FooterText = styled.p`
    color: white;
    font-family: 'Poppins', sans-serif;
`;

const Footer = () => (
    <FooterContainer>
        <FooterText>Copyright 2019 VOIX - Alle rechten voorbehouden</FooterText>
    </FooterContainer>
);


export default Footer;