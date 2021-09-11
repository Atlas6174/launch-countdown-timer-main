import styled from 'styled-components';

const StyledCounter = styled.div`
  position: absolute;
  top: 17.5%;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;


  .counter-container {
    width: 100%;
    max-width: 43.25rem;

    display: flex;
    justify-content: space-between;
  }
`

const Title = styled.h1`
  margin: 0 0 6.65rem 0;

  font-size: 1.35rem;
  color: white;
  letter-spacing: .5rem;
`

StyledCounter.Title = Title;

export default StyledCounter;
