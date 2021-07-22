import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText style={{textAlign:'justify'}}>
        I am Raja Nithin Nandimandalam pursuing Masters in Computer Science at University of Cincinnati seeking opportunity to work in a challenging environment to put my skills and abilities for the growth of the organization.
        </SectionText>
      </LeftSection>
      <div>
        <img src="/images/nithin.png" style={{marginLeft:'40px',marginTop:'10px'}} width="230px" height="230px"/>
      </div>
    </Section>
  </>
);

export default Hero;