import React, { Component } from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

import Colors from './Colors.js';
import Hero from './Hero.js';
import heroImage from './img/hakelverket.png';
import Songkick from './Songkick.js';

const socialUrls = [
  'https://facebook.com/dasirischenbande',
  'https://www.instagram.com/dasirischenbande/',
  'http://www.bandsintown.com/DasIrischenBände',
  'https://soundcloud.com/das-irischen-b-nde',
  'https://www.youtube.com/channel/UCeUvfwE144PBBumpN1Wn2cg',
]

export default class App extends Component {
  render() {

    const socialIcons = socialUrls.map((url, index) => <SocialIcon url={url} key={index}/>);

    return (
      <Container>
        <Hero image={heroImage} />
        {/* <Spacer /> */}

        <FooterContainer>
          <SocialIconsContainer>{socialIcons}</SocialIconsContainer>
        </FooterContainer>
        <MainContainer>
          <Songkick />
        </MainContainer>
      </Container>
    );
  }
}

const Container = styled.div`
height: 100%;
background: ${Colors.background};
color: ${Colors.bodyCopy};

a {
  color: ${Colors.bodyCopy}
  font-weight: bold;
  text-decoration: none;
}
`;

// const Spacer = styled.div`
//   width: 100%;
//   height: 5vh;
//   background: ${Colors.background};
//
//   position: relative;
//   top: 0px;
//   z-index: 1;
// `;

const MainContainer = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const FooterContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: flex-start;
align-items: center;
background: ${Colors.footerBackground};

padding-top: 10vh;
padding-bottom: 10vh;

a {
margin: 1vh;
}

// Hack to get rid of line underneath Songkick component
${'' /* z-index: 1;
position: relative;
bottom: 35px; */}
`;

const SocialIconsContainer = styled.div`

`;
