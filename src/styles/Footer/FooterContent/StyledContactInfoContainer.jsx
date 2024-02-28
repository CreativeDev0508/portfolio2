import styled from 'styled-components';

export const StyledContactInfoContainer = styled.div`
  position: relative;
  @media ${props => props.theme.bp.tabletS} {
    justify-self: center;
  }
  @media ${props => props.theme.bp.mobileL} {
    position: static;
  }
`;

export const StyledContactInfo = styled.ul`
  margin-left: 10rem;
  margin-top: 5rem;
  & li {
    color: ${props => props.theme.neutrals.footerText};
    font-family: ${props => props.theme.fonts.secondary};
    font-family: ${props =>
      props.lang === 'en'
        ? props.theme.fonts.secondary
        : props.theme.fonts.tertiary};
    font-size: ${props => (props.lang === 'en' ? '2.2rem' : '1.8rem')};

    @media ${props => props.theme.bp.tabletS} {
      font-size: 1.4rem;
    }
    @media ${props => props.theme.bp.mobileL} {
      font-size: 1.8rem;
    }
  }
  @media ${props => props.theme.bp.tabletL} {
    margin-left: 5rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    margin: 0;
  }
`;
