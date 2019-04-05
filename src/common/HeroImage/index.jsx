import React from 'react';
import styled from 'styled-components';

import groupimage from '../../static/group.jpeg';

const ImageContainer = styled.div`
`;

const Image = styled.img`
    width: 100vw;
    height: 600px;
    object-fit: cover;
    margin: 0 auto;
`;

const HeroImage = () => (
    <ImageContainer>
        <Image src={groupimage} />
    </ImageContainer>
);


export default HeroImage;