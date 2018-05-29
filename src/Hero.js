import React from 'react';
import styled from 'styled-components';

import Colors from './Colors.js';

export default class Hero extends React.Component {

  render() {
    return (
      <Container>
        <Image src={this.props.image} />
        <HeadlineContainer>
          <Headline>Das Irischen Bände</Headline>
        </HeadlineContainer>
      </Container>
    );
  }
}

const Container = styled.div`
height: 100%;
text-align: center;
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
`;

const Image = styled.img`
width: 100%;
z-index: 0;

`;

const HeadlineContainer = styled.div`
flex: 1;
width: 50%;

display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
`;

const Headline = styled.h1`
font-size: calc(30px + 12vw);
text-shadow: 2px 2px ${Colors.background};
text-transform: uppercase;

z-index: 1;
`;
