import styled from 'styled-components';

export const TextBoxxesContainer = styled.div`
    display: flex;  
    justify-content: space-between;
    max-width: 82%;
    margin: 50px auto;
`;

export const TextBox = styled.div`
    background-color: white;
    border-radius: 20px;
    box-shadow: 20px 10px 5px 0px rgba(0,0,0,0.75);
    width: calc(100% / 3);
    margin: 0 20px;
    height: 530px;
    font-family: 'Varela Round', sans-serif;
    font-size: 13px;
`