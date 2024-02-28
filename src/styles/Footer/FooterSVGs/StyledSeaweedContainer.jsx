import styled from 'styled-components';

export const StyledSeaweedContainer = styled.div`
  position: absolute;
  bottom: 0.8rem;
  right: 7rem;
  width: 11.5rem;
  height: 11.5rem;
  @media ${props => props.theme.bp.tabletL} {
    width: 10rem;
    height: 10rem;
    right: 3rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    right: 11.3rem;
    bottom: 0.5rem;
    width: 7rem;
    height: 7rem;
    display: none;
  }
  @media ${props => props.theme.bp.mobileM} {
    display: block;
    right: 20.7rem;
    bottom: 0rem;
    width: 5.5rem;
    height: auto;
    display: none;
  }
`;
