import React from 'react';

import Counter from './countdown/Counter';
import Media from './media/Media';

import {
  Background,
  Container
} from './App.styles';


const App = () => {
  return (
    <Background>
      <Counter title="WE'R LAUNCHIN SOON" />
      <Media />
    </Background>
  );
};

export default App;
