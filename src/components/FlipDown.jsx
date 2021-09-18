import React from 'react';
import {
  StyledFlipDown,
  AnimationContainer,
  Flip,
  Label
} from './FlipDown.styles';

const FlipDown = ({ newValue, oldValue, label }) => {
  return (
    <StyledFlipDown>
      <AnimationContainer>
	<Flip.Upper>
	  <div className="content">{newValue}</div>
	</Flip.Upper>
	<Flip.Upper key={`${label}${oldValue}`} className="dinamic">
	  <div className="content">{oldValue}</div>
	</Flip.Upper>
	<Flip.Lower>
	  <div className="content">{oldValue}</div>
	</Flip.Lower>
	<Flip.Lower key={`${label}${newValue}`} className="dinamic">
	  <div className="content">{newValue}</div>
	</Flip.Lower>
      </AnimationContainer>
      <Label>
	{label}
      </Label>
    </StyledFlipDown>
  );
}

export default FlipDown;
