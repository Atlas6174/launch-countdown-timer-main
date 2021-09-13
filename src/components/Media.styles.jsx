import styled from 'styled-components';

const StyledMedia = styled.div`
  position: absolute;
  bottom: 4.5rem;

  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 8.5rem;
  padding: 0 1rem;
`

const Icon = styled.i`
  font-size: 1.5rem;
  color: ${p => p.theme.grayishBlue};

  &:hover {
    cursor: pointer;
    color: ${p => p.theme.softRed};
  }
`

StyledMedia.Container = Container;
StyledMedia.Icon = Icon;

export default StyledMedia;
