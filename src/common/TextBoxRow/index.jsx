import React from 'react';
import reactDOM from 'react-dom';

import { TextBoxxesContainer, TextBox } from './styled';

const TextBoxRow = () => (
    <TextBoxxesContainer>
        <TextBox>text</TextBox>
        <TextBox>text</TextBox>
        <TextBox>text</TextBox>
    </TextBoxxesContainer>
);


export default TextBoxRow;