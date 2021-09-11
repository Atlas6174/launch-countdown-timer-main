import React from 'react';
import StyledFlipDown from './FlipDown.styles';

const FlipDown = ({ newValue, oldValue, label }) => {
  return (
    <StyledFlipDown>
      <StyledFlipDown.Animated3dContainer>
	<div className="flip flip-upper flip-upper-static">
	  <div className="content">{newValue}</div>
	</div>
	<div key={oldValue} className="flip flip-upper dinamic">
	  <div className="content">{oldValue}</div>
	</div>
	<div className="flip flip-lower flip-lower-static">
	  <div className="content">{oldValue}</div>
	</div>
	<div key={newValue} className="flip flip-lower dinamic">
	  <div className="content">{newValue}</div>
	</div>
      </StyledFlipDown.Animated3dContainer>
      <StyledFlipDown.Label>
	{label}
      </StyledFlipDown.Label>
    </StyledFlipDown>
  );
}

export default FlipDown;
