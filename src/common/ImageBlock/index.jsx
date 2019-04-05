import React from 'react';
import styled, { css } from 'styled-components';

const ImageContainer = styled.div`
    display: flex;

    ${props => props.second && css`
        position: relative;
        top: -250px;
    `}
`;

const Image = styled.img`
    width: 80vw;
    height: 600px;
    margin: 0 auto;
    margin-top: 150px;
`;

const ImageBlock = ({ second, image }) => (
    <ImageContainer second={second}>
        <Image src={image} />
    </ImageContainer>
);


export default ImageBlock;