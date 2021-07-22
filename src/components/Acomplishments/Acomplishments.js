import React from 'react';
import { FaAws, FaHackerrank } from 'react-icons/fa';
import {SiChase} from 'react-icons/si';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { name: "AWS", text: 'Certified AWS Developer Associate',icon:<FaAws size="5rem"/> ,ref:"https://www.certmetrics.com/amazon/electronic_certificate.aspx?cert=612B3B15071FC2050ABD6770206CF066O4C59E4D8D7F8B32FBB38654A3C6590D1"},
  { name: "AWS", text: 'Certified AWS Cloud Practitioner',icon:<FaAws size="5rem"/>, ref:"https://www.certmetrics.com/amazon/electronic_certificate.aspx?cert=64FBA2B4956DB30F47C8702B93C87AD9O76A2A0AD968758E74A32DC6151373233" },
  {name: "Chase",text:'Software Engineer Virtual Experience',icon:<SiChase size="5rem"/>, ref:"https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_fpnRJdkQanNtaLA73_completion_certificate.pdf"},
  {name: "HackerRank", text:'Problem Solving (Advanced)',icon:<FaHackerrank size="5rem"/>,ref:"https://www.hackerrank.com/certificates/0f18557dd543"}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <a target="_blank" href={card.ref}> <Box key={index}>
          <BoxNum>{card.icon}</BoxNum>
          <BoxText style={{color:"#ff00bb",fontSize:'25px',fontWeight:'900'}}>{card.name}</BoxText><br/>
          <BoxText style={{textAlign:'justify'}}>{card.text}</BoxText>
        </Box> </a>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
