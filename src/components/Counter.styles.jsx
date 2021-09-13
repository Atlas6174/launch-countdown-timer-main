import styled from 'styled-components';

const StyledCounter = styled.div`
  position: absolute;
  top: 17.5%;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  width: 100%;
  max-width: 43.25rem;

  display: flex;
  justify-content: space-between; 

  @media(max-width: 720px) {
    max-width: 20.5rem;
  }
`

const Title = styled.h1`
  margin: 0 0 6.65rem 0;

  text-align: center;
  font-size: 1.35rem;
  letter-spacing: .5rem;
  color: white;

  @media (max-width: 720px) {
    font-size: 1rem;
    letter-spacing: .25rem;
  }
`

StyledCounter.Container = Container;
StyledCounter.Title = Title;

export default StyledCounter;
