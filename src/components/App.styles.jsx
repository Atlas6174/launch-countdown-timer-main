import styled from 'styled-components';
import bgStars from '../statics/images/bg-stars.svg';
import bgHills from '../statics/images/pattern-hills.svg';

export const Color = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: hsl(235, 16%, 14%);
`

export const Stars = styled.div`
  display: block;
  height: 100vh;
  width: 100vw;
  background-image: url(${bgStars});
  background-size: cover;
`

export const Hills = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bgHills});
  background-size: 100% 25%;
  background-repeat: no-repeat;
  background-position: bottom;
`

export const Background = props => {
  return (
    <Color>
      <Stars>
	<Hills>
	  {props.children}
	</Hills>
      </Stars>
    </Color>
  )
}


