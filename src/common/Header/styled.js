import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    margin-bottom: 100px;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
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
    margin: 0 auto;
    max-width: 650px;
    margin-top: -320px;
`;

export const HeaderTitle = styled.h1`
    color: white;
    font-family: 'Poppins', sans-serif;
    border-bottom: 10px solid #f7a60a;
    letter-spacing: 1px;
    font-size: 40px;
    text-transform: uppercase;
    width: 110px;
    margin: 0 auto;
`;

export const HeaderContent = styled.p`
    color: white;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
    font-size: 13px;
    line-height: 25px;
`;

export const PresLink = styled.a`
    color: white;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
    font-size: 18px;
    position: relative;
    top: 75px;
`;