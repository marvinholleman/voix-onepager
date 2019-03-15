import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    bottom: 25px;
    position: relative;
`;

export const Logo = styled.img`
    width: 210px;
    height: 170px;
`;

export const HeaderContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const ContentWrapper = styled.div`
    margin: 75px auto;
    max-width: 650px;
`;

export const HeaderTitle = styled.h1`
    color: white;
    font-family: 'Varela Round', sans-serif;
    letter-spacing: 1px;
    font-size: 22px;
`;

export const HeaderContent = styled.p`
    color: white;
    font-family: 'Varela Round', sans-serif;
    letter-spacing: 1px;
    font-size: 13px;
`;

export const HeaderDivider = styled.div`
    width: 80%;
    height: 15px;
    background-color: white;
    margin: 100px auto;
`;