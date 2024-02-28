import styled from 'styled-components';

export const StyledPlantContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 10rem;
  width: 9rem;
  height: auto;
  @media ${props => props.theme.bp.desktopXS} {
    width: 6rem;
    left: 8rem;
  }
  @media ${props => props.theme.bp.tabletL} {
    width: 5rem;
    left: 6rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    width: 4rem;
    left: 10rem;
  }
  @media ${props => props.theme.bp.mobileM} {
    display: none;
  }
`;
