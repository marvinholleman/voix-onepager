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

import persona from '../../static/conceptfase/persona.JPG';
import context from '../../static/conceptfase/context.jpg';
import customer_journey from '../../static/conceptfase/customer_journey.jpg'

import concepten from '../../static/concepten.JPG';

import schetsen from '../../static/schetsen.png';
import iteratie from '../../static/iteratie.JPG';
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
                        content="Na de debriefing van de docent en Gemeente Rotterdam zijn we in de connectfase gekomen. Ons eerste idee was om een aantal brainstorm sessie te gaan houden om de Gemeente Rotterdam, doelgroep en problemen in kaart te brengen, zonder onderzoek en uitstellen van onderdeel. " />

                    <TextBox left title="Gemeentedoelgroep brainstorm" image={doelgroepbrainstorm} content="Na een brainstormsessie over Gemeente Rotterdam zijn we gaan zoeken naar mogelijke doelgroepen. We hebben dit zonder oordeel of onderzoek gedaan, om het creatieve proces te bevorderen." />

                    <TextBox title="Gemeente problemen brainstorm" image={problemenBrainstorm} content="We wilde uiteindelijke de problemen in kaart brengen die nu mogelijk onder vonden worden binnen Rotterdam, heel globaal en zonder specifiek onderwerp of doelgroep. We willen later in het onderzoek gaan convergeren en kijken wat aansluit en past bij de onderzoeksresultaten." />

                    <TextBox left title="Interview Melis" image={interview} content="We hebben een aantal interviews afgenomen met de doelgroep laaggeletterden om inzichten en waardes in kaart te brengen. We kwamen op een aantal interessante inzichten (zie inzichten)." />

                    <TextBox left title="Inzichten" image={inzichten} content="We zijn noteren welke inzichten we uit de onderzoeken hebben gehaald. We hebben de meest relevante genoteerd en meegenomen in het maken van een eerste concept. Enkele inzichten waren dat de doelgroep angst ervaart om hun laaggeletterdheid te delen met anderen. Ze nemen graag iemand mee naar een stadsdeelkantoor om hen te helpen en ze voelen zich zekerder als er in hun eigen taal gesproken worden." />

                    <TextBox title="Onderzoek inzichten" image={onderzoekInzichten} content="We zijn noteren welke inzichten we uit de onderzoeken hebben gehaald. We hebben de meest relevante genoteerd en meegenomen in het maken van een eerste concept. Bij de deskresearch kwam bijvoorbeeld naar boven dan 15,7% van de bevolking in Zuid-Holland laaggeletterd is, waarvan 8,1% een niet westerse achtergrond heeft." />

                </TextBoxxesSection>

                <SectionTitle second>Conceptfase</SectionTitle>
                <TextBoxxesSection second>
                    <TextBox first title="Persona" image={persona} content="Eenmaal in de conceptfase beland zijn we begonnen met een persona te ontwikkelen die goed aansluit bij de doelgroep en de waardes van de doelgroep. We gebruiken deze persona om de scenario’s en customer journey map uit te werken." />

                    <TextBox left title="Concept brainstorm" image={iteratie} content="Na de onderzoeksfase zijn we een eerste braindump gaan maken met mogelijke concepten. Het viel ons op dat we tijdens de creatieve sessie al snel richting problemen oplossen wilde gaan. Dit wilde we eigenlijk niet doen, later zijn we afgaan zien van de problemen, en meer gericht op de context en situatie." />

                    <TextBox title="Concept" image={schetsen} content="We wilde graag de concepten goed in kaart brengen, dus we besloten om de concepten even op papier te noteren zodat iedereen in het team op één lijn zit. De globale lijnen van het concept, hoeveel schermen we nodig hebben en concept namen." />

                    <TextBox left title="Customer journey" image={customer_journey} content="Na de tussenpresentatie wilde we voor onze tweede iteratie van de concepten een customer journey map maken. We hebben de huidige situatie geschetst en de gewenste situatie. We kwamen erachter dat we het beste een klein deel van de beleving kunnen pakken, dus echt richten op één probleem." />

                    <TextBox title="Context foto’s" image={context} content="We zijn naar een stadsdeelkantoor gegaan om te kijken hoe een gebruiker op locatie een afspraak met de gemeente doorloopt. Ook hebben we een aantal vragen aan een baliemedewerkster gesteld. Zoals: Waar melden burgers zich als ze een afspraak hebben? En wat moeten ze allemaal meenemen als ze een nieuw ID of rijbewijs aanvragen." />

                    <TextBox left title="Testen" image={concepten} content="We zijn eerst gaan testen met onze eerste concepten, namelijk LookAt en Coci. We hebben met visuele schermen een gebruikerstest doorlopen om te kijken hoe de gebruiker onze concepten ervaart. Daaruit kwam dat de meeste respondenten niet zo goed begrepen wat de handelingen waren binnen de App. De manier van communiceren was nog te complex en de visuals onduidelijk." />

                </TextBoxxesSection>
                <SectionTitle last>Realisatie</SectionTitle>
                <ImageBlockSection>
                    <ImageBlock image={coci} />
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