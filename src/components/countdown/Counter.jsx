import React from 'react';

import FlipDown from './FlipDown';

import {
  CounterWrapper,
  Container
} from './Counter.styles';

class Counter extends React.Component {
  render() {
    return (
      <CounterWrapper>
	<h1>{props.title}</h1>
	<Container>
	  <FlipDown value={01} />
	  <FlipDown value={01} />
	  <FlipDown value={01} />
	  <FlipDown value={01} />
	</Container>
      </CounterWrapper>
    );
  }
}

export default Counter;
