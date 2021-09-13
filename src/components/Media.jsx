import React from 'react';

import StyledMedia from './Media.styles';

const Media = () => {
  return (
    <StyledMedia>
      <StyledMedia.Container>
	<StyledMedia.Icon className="fab fa-facebook-square" />
	<StyledMedia.Icon className="fab fa-pinterest" />
	<StyledMedia.Icon className="fab fa-instagram" />
      </StyledMedia.Container>
    </StyledMedia>
  );
}

export default Media;
