import styled, { css } from 'styled-components';

export const Container = styled.div`
    height: 100%
    width: 100%; 
`;

export const SectionTitle = styled.h1`
    color: #333;
    width: 80%;
    margin: 0 auto;
    position: relative;
    top: -10px;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;
    font-size: 32px;

   ${props => props.second && css`
        top: 140px;
    `};

    ${props => props.last && css`
        top: 400px;
    `};
`;

export const TextBoxxesSection = styled.div`
    background-color: #1f4392;
    height: 2090px;

    ${props => props.second && css`
        position: relative;
        top: 150px;
    `};
`;

export const ImageBlockSection = styled.div`
    background-color: #f7a60a;
    height: 640px;
    margin-top: 300px;

    ${props => props.second && css`
        position: relative;
        top: 0px;
    `};
`;
