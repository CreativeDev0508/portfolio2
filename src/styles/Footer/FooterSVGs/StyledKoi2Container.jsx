import styled from 'styled-components';

export const StyledKoi2Container = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  position: absolute;
  top: 0;
  transform: translateX(32rem);
  @media ${props => props.theme.bp.desktopS} {
    width: 6rem;
    top: 2rem;
  }
  @media ${props => props.theme.bp.desktopXS} {
    width: 5rem;
    height: auto;
  }
  @media ${props => props.theme.bp.tabletL} {
    transform: translateX(28rem);
  }
  @media ${props => props.theme.bp.tabletS} {
    display: none;
  }
`;
