import styled, { keyframes } from 'styled-components';

const StyledFlipDown = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-between;
`

const Container3d = styled.div`
  position: relative;
  height: 8.5rem;
  width: 9.25rem;
  border-radius: .75rem;
  box-shadow: 0 .5rem ${p => p.theme.veryDarkBlackBlue};

  font-size: 4.5rem;
  font-weight: 700;
  color: ${p => p.theme.softRed};

  .flip {
    position: absolute;
    width: 100%;
    height: 50%;
    overflow: hidden;

    display: flex;
    justify-content: center;

    &-upper {
      top: 0;
      border-bottom: 1px solid ${p => p.theme.veryDarkBlackBlue};
      border-radius: .75rem .75rem 0 0;
      background: ${p => p.theme.darkDesBlue};

      .content {
	align-self: flex-end;
	transform: translateY(50%);
      }

      ::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background:
	  radial-gradient(
	    circle at 0 100%,
	    ${p => p.theme.veryDarkBlackBlue} .35rem,
	    rgba(0, 0, 0, .10) .36rem),
	  radial-gradient(
	    circle at 100% 100%,
	    ${p => p.theme.veryDarkBlackBlue} .35rem,
	    rgba(0, 0, 0, .10) .36rem);
      }
    }

    &-lower {
      bottom: 0;
      border-top: 1px solid ${props => props.theme.veryDarkBlackBlue};
      border-radius: 0 0 .75rem .75rem;
      background: ${props => props.theme.darkDesBlue};

      .content {
	align-self: flex-start;
	transform: translateY(-50%);
      }

      ::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background:
	  radial-gradient(
	    circle at 0 0,
	    ${p => p.theme.veryDarkBlackBlue} .35rem,
	    transparent .36rem),
	  radial-gradient(
	    circle at 100% 0,
	    ${p => p.theme.veryDarkBlackBlue} .35rem,
	     transparent .36rem);
      }
    }
  }
`

// 3d related
const flipDownUpper = keyframes`
  0% {
    transform: rotateX(1deg);
  }
  50% {
    transform: rotateX(-90deg);
  }
  100% {
    transform: rotateX(-90deg);
  }
`

const flipDownLower = keyframes`
  0% {
    transform: rotateX(90deg);
  }
  50% {
    transform: rotateX(90deg);
  }
  1005 {
    transform: rotateX(-1deg);
  }
`

const Animated3dContainer = styled(Container3d)`
  perspective: 1000px;

 .flip {
    backface-visibility: hidden;
    transform-style: preserve-3d;

    &-lower.dinamic {
      transform-origin: 50% 0%;

      animation: ${flipDownLower} .7s ease-out forwards;
    }

    &-upper.dinamic {
      transform-origin: 50% 100%;

      animation: ${flipDownUpper} .7s ease-out forwards;
    }
  } 
`

const Label = styled.h2`
  margin: 2rem 0 0 0;

  font-size: .75rem;
  color: ${p => p.theme.grayishBlue};
  letter-spacing: .45rem;
`

StyledFlipDown.Animated3dContainer = Animated3dContainer;
StyledFlipDown.Label = Label;

export default StyledFlipDown;
