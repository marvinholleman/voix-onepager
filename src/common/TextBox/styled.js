import styled, { css } from 'styled-components';

export const TextBoxContainer = styled.div`
    display: flex;
    margin: 75px auto;
    width: 80%;
    position: relative;
    top: -60px;
    
    ${props => props.left && css`
        flex-direction: row-reverse;
    `};
`;

export const TextBoxImage = styled.img`
    height: 300px;
    max-width: 420px;
`;

export const TextBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 70px;
`;

export const TextBoxTitle = styled.h1`
    color: white;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
    font-size: 22px;
    

    ${props => props.first && css`
        color: #333;
        margin-bottom: 30px;
    `};

    ${props => props.left && css`
        text-align: right;
    `};
`;

export const TextBoxText = styled.p`
    color: white;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
    font-size: 13px;
    margin-top: 20px;
    line-height: 25px;

    ${props => props.left && css`
        text-align: right;
    `};
`;

