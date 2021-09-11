import React from 'react';

import Counter from './Counter';
import Media from './Media';

import StyledApp from './App.styles';

const App = () => {
  return (
    <StyledApp>
      <StyledApp.StarsLayer>
	<StyledApp.HillsLayer>
	  <Counter
	    title="WE'RE LAUNCHING SOON"
	    finalDate={new Date("Sep 13, 21")}
	  />
	  <Media />
	</StyledApp.HillsLayer>
      </StyledApp.StarsLayer>
    </StyledApp>
  );
};

export default App;
