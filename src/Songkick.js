import React from 'react';
import styled from 'styled-components';

import Colors from './Colors.js';

export default class Songkick extends React.Component {
  render() {
    return (
      <Container>
        <a href="https://www.songkick.com/artists/9063089"
        className="songkick-widget"
        data-theme="dark"
        data-track-button="on"
        data-detect-style="true"
        data-background-color={Colors.background}></a>
      </Container>
    );
  }
}

const Container = styled.div`
width: 100%;
max-width: 720px;

& > * {
  width: 100%;
}
`;
