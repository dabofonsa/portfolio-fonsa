import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenue sur <br />
          Mon Portfolio Personnel
        </SectionTitle>
        <SectionText>
        Je suis Fonsa Dabo, je suis développeur web.
        </SectionText>
        <Button onClick={() => window.location = "https://github.com/dabofonsa"}>Voir plus</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
