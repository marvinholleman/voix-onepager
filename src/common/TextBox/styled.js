import styled, { css } from 'styled-components';

export const TextBoxContainer = styled.div`
    display: flex;
    margin: 75px auto;
    width: 80%;

    ${props => props.left && css`
        flex-direction: row-reverse;
    `};
`;

export const TextBoxImage = styled.img``;

export const TextBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 70px;
`;

export const TextBoxTitle = styled.h1`
    color: white;
    font-family: 'Varela Round', sans-serif;
    letter-spacing: 1px;
    font-size: 22px;

    ${props => props.left && css`
        text-align: right;
    `};
`;

export const TextBoxText = styled.p`
    color: white;
    font-family: 'Varela Round', sans-serif;
    letter-spacing: 1px;
    font-size: 13px;

    ${props => props.left && css`
        text-align: right;
    `};
`;

