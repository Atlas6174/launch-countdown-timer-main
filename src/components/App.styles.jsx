import styled from 'styled-components';
import bgStars from '../statics/images/bg-stars.svg';
import bgHills from '../statics/images/pattern-hills.svg';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: hsl(235, 16%, 14%);
  
  font-family: ${p => p.theme.fontFamily};
`

const StarsLayer = styled.div`
  display: block;
  height: 100vh;
  width: 100vw;
  background-image: url(${bgStars});
  background-size: cover; 
`

const HillsLayer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bgHills});
  background-size: 100% 25%;
  background-repeat: no-repeat;
  background-position: bottom;
  
  @media(max-width: 720px) {
    background-size: 45rem;
    background-position: 100% 100%;
  }
`

StyledApp.StarsLayer = StarsLayer;
StyledApp.HillsLayer = HillsLayer;

export default StyledApp;
