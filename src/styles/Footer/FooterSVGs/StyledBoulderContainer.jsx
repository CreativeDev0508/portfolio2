import styled from 'styled-components';

export const StyledBoulderContainer = styled.div`
  & svg {
    width: 10rem;
    height: auto;
  }

  position: absolute;
  bottom: ${props => (props.lang === 'en' ? '-7.8rem' : '-8.4rem')};
  /* bottom: -7.8rem; */
  transform: translateX(15rem);
  @media ${props => props.theme.bp.tabletS} {
    transform: translateX(23rem);
    bottom: 0;
    width: 7rem;
  }
  @media ${props => props.theme.bp.mobileL} {
    transform: translateX(19rem);
  }
  @media ${props => props.theme.bp.mobileM} {
    transform: translateX(4rem);
    bottom: -11rem;
    bottom: 0;
    width: 10rem;
  }
`;
