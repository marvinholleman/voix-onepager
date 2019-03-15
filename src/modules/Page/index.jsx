import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../../common/Header';
import TextBoxxes from '../../common/TextBoxxes';
import HeroImage from '../../common/HeroImage';
import TextBox from '../../common/TextBox';

import { Container } from './styled';

class Page extends React.Component {
    render() {
        return (
            <Container>
                <Header />
                <TextBoxxes />
                <HeroImage />
                <TextBox />
                <TextBox left />
                <TextBox />
            </Container>
        );
    }
}

export default Page;