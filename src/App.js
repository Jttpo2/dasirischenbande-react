import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from './Colors.js';
import Hero from './Hero.js';
import heroImage from './img/hakelverket.png';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Hero image={heroImage} />
        <FooterContainer>

        </FooterContainer>
      </Container>
    );
  }
}

const Container = styled.div`
height: 100%;
background: ${Colors.background};
color: ${Colors.bodyCopy};
`;

const FooterContainer = styled.div`
height: 2000px;
background: ${Colors.footerBackground};
`;
