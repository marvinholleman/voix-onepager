import React from 'react';

import { TextBoxContainer, TextBoxImage, TextBoxContent, TextBoxTitle, TextBoxText } from './styled';

const TextBox = ({ left, first, last, title, content, image }) => (
    <TextBoxContainer last={last} left={left}>
        <TextBoxImage src={image} />
        <TextBoxContent>
            <TextBoxTitle left={left} first={first}>{title}</TextBoxTitle>
            <TextBoxText left={left}>{content}</TextBoxText>
        </TextBoxContent>
    </TextBoxContainer>
);

export default TextBox;