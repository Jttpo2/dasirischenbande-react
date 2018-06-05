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
z-index: 0;

width: 100%;
object-fit: cover;

@media only screen and (orientation: landscape) {
height: 100%;
}
`;

const HeadlineContainer = styled.div`
flex: 1;
width: 50%;

display: flex;
flex-flow: column;
justify-content: center;
align-items: center;

@media only screen and (orientation: landscape) {
  width: 100%;
  justify-content: flex-end;
  position: relative;
  bottom: 4vh;
}

@media only screen and (orientation: portrait) and (min-width: 580px) {
  width: 100%;
  justify-content: center;
  position: relative;
  ${'' /* bottom: 4vh; */}
  ${'' /* bottom: -5vh; */}
}

@media only screen and (max-aspect-ratio: 568/319) {

}
`;

const Headline = styled.h1`
font-size: calc(30px + 8vw + 4vh);
text-shadow: 2px 2px ${Colors.background};
text-transform: uppercase;

z-index: 1;

@media only screen and (orientation: landscape) {
font-size: calc(1px + 6vw + 3vh);
margin-bottom: 0px;
}

@media only screen and (orientation: portrait) and (min-width: 580px) {
font-size: calc(30px + 4vw + 3vh);
}
`;
