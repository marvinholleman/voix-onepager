import React from 'react';

import { TextBoxContainer, TextBoxImage, TextBoxContent, TextBoxTitle, TextBoxText } from './styled';

const TextBox = ({ left, first, title, content, image }) => (
    <TextBoxContainer left={left}>
        <TextBoxImage src={image} />
        <TextBoxContent>
            <TextBoxTitle left={left} first={first}>{title}</TextBoxTitle>
            <TextBoxText left={left}>{content}</TextBoxText>
        </TextBoxContent>
    </TextBoxContainer>
);

export default TextBox;