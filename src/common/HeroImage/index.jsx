import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
`;

const Image = styled.img`
    width: 100vw;
    height: 600px;
    object-fit: cover;
    margin: 100px auto;
`;

const HeroImage = () => (
    <ImageContainer>
        <Image src={'https://via.placeholder.com/800'} />
    </ImageContainer>
);


export default HeroImage;