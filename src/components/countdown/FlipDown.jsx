import React from 'react';
import StyledFlipDown from './FlipDown.styles';

const FlipDown = ({ newValue, oldValue }) => {
  return (
    <StyledFlipDown>
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
    </StyledFlipDown>
  );
}

export default FlipDown;
