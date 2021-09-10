import React from 'react';

import Counter from './countdown/Counter';
import Media from './media/Media';

import { Background } from './App.styles';


const App = () => {
  return (
    <Background>
      <Counter
	title="WE'R LAUNCHIN SOON"
	finalDate={new Date("Sep 13, 21")}/>
      <Media />
    </Background>
  );
};

export default App;
