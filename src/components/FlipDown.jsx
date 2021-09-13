import React from 'react';
import StyledFlipDown from './FlipDown.styles';

const FlipDown = ({ newValue, oldValue, label }) => {
  return (
    <StyledFlipDown>
      <StyledFlipDown.AnimationContainer>
	<StyledFlipDown.Upper>
	  <div className="content">{newValue}</div>
	</StyledFlipDown.Upper>
	<StyledFlipDown.Upper key={`${label}${oldValue}`} className="dinamic">
	  <div className="content">{oldValue}</div>
	</StyledFlipDown.Upper>
	<StyledFlipDown.Lower>
	  <div className="content">{oldValue}</div>
	</StyledFlipDown.Lower>
	<StyledFlipDown.Lower key={`${label}${newValue}`} className="dinamic">
	  <div className="content">{newValue}</div>
	</StyledFlipDown.Lower>
      </StyledFlipDown.AnimationContainer>
      <StyledFlipDown.Label>
	{label}
      </StyledFlipDown.Label>
    </StyledFlipDown>
  );
}

export default FlipDown;
