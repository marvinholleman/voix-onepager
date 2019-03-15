import React from 'react';

import { TextBoxContainer, TextBoxImage, TextBoxContent, TextBoxTitle, TextBoxText } from './styled';

const TextBox = ({ left }) => (
    <TextBoxContainer left={left}>
        <TextBoxImage src={'https://via.placeholder.com/500x300'} />
        <TextBoxContent>
            <TextBoxTitle left={left}>Koptext</TextBoxTitle>
            <TextBoxText left={left}>Duis eget eros fermentum, posuere ligula vitae, faucibus ligula. Ut vel nisl odio. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Praesent metus lectus, faucibus id ex id, hendrerit
        dignissim massa. Praesent gravida tristique hendrerit. Donec semper dui vitae enim laoreet,
        sit amet fermentum felis laoreet. Fusce ut metus vel mauris rutrum iaculis. Phasellus maximus
        metus non venenatis pretium. Cras nec viverra dui. Mauris laoreet urna auctor, faucibus justo sit

amet, mattis nisl.</TextBoxText>
        </TextBoxContent>
    </TextBoxContainer>
);

export default TextBox;