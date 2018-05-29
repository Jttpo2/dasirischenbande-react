import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from './Colors.js';
import Hero from './Hero.js';
import heroImage from './img/hakelverket.png';
import Songkick from './Songkick.js';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Hero image={heroImage} />
        {/* <Spacer /> */}
        <Songkick />
        <FooterContainer>
          <a href="mailto:info@dasirischenbände.se">info@dasirischenbände.se</a>
          <a href="https://facebook.com/dasirischenbande">facebook.com/dasirischenbande</a>
        </FooterContainer>
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

const Spacer = styled.div`
  width: 100%;
  height: 5vh;
  background: ${Colors.background};

  position: relative;
  top: 0px;
  z-index: 1;
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
z-index: 1;
position: relative;
bottom: 35px;
`;
