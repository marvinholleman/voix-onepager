import React from 'react';

import Header from '../../common/Header';
import TextBox from '../../common/TextBox';
import ImageBlock from '../../common/ImageBlock';
import Footer from '../../common/Footer';

import gemeenterdam from '../../static/connectfase/gemeente-rotterdam-brainstorm.jpeg';
import doelgroepbrainstorm from '../../static/connectfase/doelgroep-brainstorm.jpeg';
import inzichten from '../../static/connectfase/Inzichten.JPG';
import onderzoekInzichten from '../../static/connectfase/onderzoek_inzichten.JPG';
import problemenBrainstorm from '../../static/connectfase/probleme-brainstorm.jpeg';
import interview from '../../static/connectfase/interview.jpg';

import concepten from '../../static/concepten.JPG';
import probleem from '../../static/probleem.jpeg';

import schetsen from '../../static/schetsen.png';
import iteratie from '../../static/iteratie.JPG';
import journey from '../../static/journey.jpg';
import coci from '../../static/coci.png';
import lookat from '../../static/lookat.png';

import { Container, TextBoxxesSection, ImageBlockSection, SectionTitle } from './styled';

class Page extends React.Component {
    render() {
        return (
            <Container>
                <Header />
                <SectionTitle>Connectfase</SectionTitle>
                <TextBoxxesSection>
                    <TextBox first image={gemeenterdam} title="Gemeente Rotterdam brainstorm" 
                    content="ligula. Ut vel nisl odio. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Praesent metus lectus, faucibus
                    id ex id, hendrerit dignissim massa. Praesent gravida tristique
                        hendrerit. Donec semper  Praesent metus lectus, faucibus"/>

                    <TextBox left title="Gemeentedoelgroep brainstorm" image={doelgroepbrainstorm}   content="ligula. Ut vel nisl odio. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Praesent metus lectus, faucibus
                    id ex id, hendrerit dignissim massa. Praesent gravida tristique
                        hendrerit. Donec semper  Praesent metus lectus, faucibus" />

                    <TextBox title="Gemeente problemen brainstorm" image={problemenBrainstorm}  content="ligula. Ut vel nisl odio. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Praesent metus lectus, faucibus
                    id ex id, hendrerit dignissim massa. Praesent gravida tristique
                        hendrerit. Donec semper  Praesent metus lectus, faucibus" />

                    <TextBox left title="Interview Melis" image={interview}  content="ligula. Ut vel nisl odio. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Praesent metus lectus, faucibus
                    id ex id, hendrerit dignissim massa. Praesent gravida tristique
                        hendrerit. Donec semper  Praesent metus lectus, faucibus" />

                    <TextBox title="Onderzoek inzichten" image={onderzoekInzichten}  content="ligula. Ut vel nisl odio. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Praesent metus lectus, faucibus
                    id ex id, hendrerit dignissim massa. Praesent gravida tristique
                        hendrerit. Donec semper  Praesent metus lectus, faucibus" />

                    <TextBox left title="Inzichten" image={inzichten}  content="ligula. Ut vel nisl odio. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Praesent metus lectus, faucibus
                    id ex id, hendrerit dignissim massa. Praesent gravida tristique
                        hendrerit. Donec semper  Praesent metus lectus, faucibus" />
                </TextBoxxesSection>
                <SectionTitle second>Conceptfase</SectionTitle>
                <TextBoxxesSection second>
                    <TextBox first title="Persona" image={journey} content="ligula. Ut vel nisl odio. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Praesent metus lectus, faucibus
                    id ex id, hendrerit dignissim massa. Praesent gravida tristique
                        hendrerit. Donec semper  Praesent metus lectus, faucibus" />

                    <TextBox left title="Concept brainstorm" image={iteratie}  content="ligula. Ut vel nisl odio. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Praesent metus lectus, faucibus
                    id ex id, hendrerit dignissim massa. Praesent gravida tristique
                        hendrerit. Donec semper  Praesent metus lectus, faucibus" />

                    <TextBox title="Concept" image={schetsen}  content="ligula. Ut vel nisl odio. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Praesent metus lectus, faucibus
                    id ex id, hendrerit dignissim massa. Praesent gravida tristique
                        hendrerit. Donec semper  Praesent metus lectus, faucibus"/>

                         <TextBox left title="Customer journey" image={concepten}  content="ligula. Ut vel nisl odio. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Praesent metus lectus, faucibus
                    id ex id, hendrerit dignissim massa. Praesent gravida tristique
                        hendrerit. Donec semper  Praesent metus lectus, faucibus" />

                    <TextBox title="Context foto’s" image={concepten}  content="ligula. Ut vel nisl odio. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Praesent metus lectus, faucibus
                    id ex id, hendrerit dignissim massa. Praesent gravida tristique
                        hendrerit. Donec semper  Praesent metus lectus, faucibus" />

                    <TextBox left title="Testen" image={concepten}  content="ligula. Ut vel nisl odio. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Praesent metus lectus, faucibus
                    id ex id, hendrerit dignissim massa. Praesent gravida tristique
                        hendrerit. Donec semper  Praesent metus lectus, faucibus" />

                </TextBoxxesSection>
                <SectionTitle last>Realisatie</SectionTitle>
                <ImageBlockSection>
                    <ImageBlock image={coci}/>
                </ImageBlockSection>
                <ImageBlockSection second>
                    <ImageBlock image={lookat} second />
                </ImageBlockSection>
                <Footer />
            </Container>
        );
    }
}

export default Page;