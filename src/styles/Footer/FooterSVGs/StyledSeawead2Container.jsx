import styled from 'styled-components';

export const StyledSeaweed2Container = styled.div`
  position: absolute;
  bottom: 2.5rem;
  right: 17rem;
  width: 7rem;
  height: 7rem;
  @media ${props => props.theme.bp.tabletL} {
    width: 6rem;
    height: 6rem;
    right: 11.5rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    display: none;
  }
`;
