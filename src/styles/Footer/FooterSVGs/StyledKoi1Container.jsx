import styled from 'styled-components';

export const StyledKoi1Container = styled.div`
  width: 8rem;
  height: 8rem;
  position: absolute;
  bottom: -5rem;
  transform: translateX(-7rem);
  @media ${props => props.theme.bp.desktopXS} {
    width: 7rem;
  }
  @media ${props => props.theme.bp.tabletL} {
    width: 6rem;
    transform: translateX(-5.5rem);
  }
  @media ${props => props.theme.bp.tabletS} {
    display: none;
  }
`;
