import styled, { keyframes } from 'styled-components';

const StyledFlipDown = styled.div`
  position: relative;
  height: 8.75rem;
  width: 9.375rem;

  font-family: ${props => props.theme.fontFamily};
  font-size: 4.25rem;
  color: ${props => props.theme.softRed};

  .flip {
    display: flex;
    justify-content: center;

    overflow: hidden;
    width: 100%;
    height: 50%;

    position: absolute;

    &-upper {
      top: 0;
      border-bottom: 2px solid ${props => props.theme.veryDarkBlackBlue};
      border-radius: .75rem .75rem 0 0;
      background: ${props => props.theme.darkDesBlue};

      .content {
	align-self: flex-end;
	transform: translateY(50%);
      }
    }

    &-lower {
      bottom: 0;
      border-top: 2px solid ${props => props.theme.veryDarkBlackBlue};
      border-radius: 0 0 .75rem .75rem;
      background: ${props => props.theme.darkDesBlue};

      .content {
	align-self: flex-start;
	transform: translateY(-50%);
      }
    }
  }
`

// 3d related
const flipDownUpper = keyframes`
  0% {
    transform: rotateX(0deg);
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
    transform: rotateX(0);
  }
`

const StyledAnimatedFlipDown = styled(StyledFlipDown)`
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

      animation: ${flipDownUpper} .7s ease-in forwards;
    }
  } 
`



export default StyledAnimatedFlipDown;
