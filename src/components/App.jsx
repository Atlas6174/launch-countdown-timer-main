import React from 'react';

import Counter from './Counter';
import Media from './Media';

import StyledApp from './App.styles';

// The final date to pass to the Counter component
const fiveDays = 1000 * 60 * 60 * 24 * 5;
const currDate = new Date();
const finalDate = currDate.getTime() + fiveDays;

const App = () => {
  return (
    <StyledApp>
      <StyledApp.StarsLayer>
	<StyledApp.HillsLayer>
	  <Counter
	    title="WE'RE LAUNCHING SOON"
	    finalDate={finalDate}
	  />
	  <Media />
	</StyledApp.HillsLayer>
      </StyledApp.StarsLayer>
    </StyledApp>
  );
};

export default App;
