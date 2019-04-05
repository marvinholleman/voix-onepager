import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
    background-color: #56c09b;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 99999;
`;

export const MenuLogo = styled.span`
    color: white;
    border-bottom: 3px solid #f7a60a;
    text-transform: uppercase;
    margin-top: 2px;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;
    font-size: 15px;
`;

export const MenuItem = styled.a`
    padding: 0 40px;
    color: white;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;
    font-size: 15px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #f7a60a;
    }

    ${props => props.first && css`
        padding: 0 40px 0 80px;
    `};
`;