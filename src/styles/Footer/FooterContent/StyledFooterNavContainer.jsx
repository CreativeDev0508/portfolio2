import styled from 'styled-components';

export const StyledFooterNavContainer = styled.div`
  justify-self: end;
  z-index: 500;
  position: relative;

  & ul {
    position: static;
    & li {
      font-size: 2.4rem;
      text-transform: capitalize;
      @media ${props => props.theme.bp.mobileM} {
        font-size: 3.2rem;
      }

      & :hover {
        /* color: inherit; */
      }

      & a {
        color: ${props => props.theme.neutrals.footerText};
        font-weight: 400;
      }
    }
  }
  @media ${props => props.theme.bp.tabletS} {
    justify-self: center;
    margin-top: 2rem;
  }
`;
