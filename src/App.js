import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from './Colors.js';

export default class App extends Component {
  render() {
    return (
      <Container>
        Das Irischen Bände

      </Container>
    );
  }
}

const Container = styled.div`
  height: 100%;
  background: ${Colors.background};
  color: ${Colors.bodyCopy};
`;
