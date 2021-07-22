import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {SiMicrosoftazure} from 'react-icons/si';
import {FaAws} from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development and Cloud Computing world.
      Full Stack Web Development, AWS and Azure Cloud Platform. I am a certified AWS Developer Asscoiate and Cloud Practitioner.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with 
            React.js, Vue.js <br/> and React Native
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
            Experience with 
            Node and Databases (SQL, PostgreSQL MongoDB)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>AWS Cloud</ListTitle>
          <ListParagraph>
            Certified AWS Developer <br/> Associate and Cloud <br/>Practitioner
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiMicrosoftazure size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Azure Cloud</ListTitle>
          <ListParagraph>
            Used Azure DevOps and App <br/>Services for developing a web application
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
