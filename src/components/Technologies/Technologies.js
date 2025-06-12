import React from 'react';
import { DiAngularSimple, DiCss3, DiDatabase, DiFirebase, DiHtml5, DiJava, DiJavascript, DiNodejs, DiReact, DiStackoverflow, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Je développe des applications web en utilisant les technologies modernes de développement.
      Je sais faire du Front-End comme du Back-End.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            {/* Expériences avec <br /> */}
            HTML/CSS, React, Angular, Next, Vue
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            {/* Expériences avec <br /> */}
            NodeJs, Express, Spring, Django, .NET
          </ListParagraph>
        </ListContainer>
      </ListItem>
       <ListItem>
        <picture>
          <DiDatabase size="3rem" />
          {/* <DiFirebase size="3rem" /> */}
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            {/* Expériences avec <br /> */}
            MySQL, PostgreSQL, <br />MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            {/* Expérience avec<br /> */}
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;