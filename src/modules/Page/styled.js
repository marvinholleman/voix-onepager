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


    ${props => props.third && css`
        position: relative;
        height: 550px;

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

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
`;

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: white;
    margin-top: 75px;
`;

export const ItemsContainer = styled.div`
    display: flex;
    width: 800px;
    flex-wrap: wrap;
`;

export const BulletItem = styled.p`
    font-family: 'Poppins', sans-serif;
    color: white;
    width: 340px;
    padding: 10px 30px;

    ${props => props.last && css`
        width: 100%;
        text-align:center;
    `};
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 200px;
    align-items: center;

    &:hover {
        background-color: #f7f7f7;
    }
`;
export const PosterLink = styled.a`
    text-decoration: none;
    color: #f7a50a;
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 1s;


    &:hover {
    text-decoration: underline;
      

    }
`;