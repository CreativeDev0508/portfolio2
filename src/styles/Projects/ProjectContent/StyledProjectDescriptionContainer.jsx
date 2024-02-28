import styled from 'styled-components';

export const StyledProjectDescriptionContainer = styled.div`
  margin-bottom: 1rem;
  padding: 2.5rem;
  text-align: end;
  border-radius: 0.2rem;
  background-color: ${props => props.theme.primary.projectDescBg};
  & p {
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: none;
    @media ${props => props.theme.bp.desktopS} {
      font-size: 1.2rem;
    }
    @media ${props => props.theme.bp.tabletL} {
      font-size: 1.6rem;
    }
    @media ${props => props.theme.bp.mobileM} {
      font-size: 1.2rem;
    }
  }

  @media ${props => props.theme.bp.tabletL} {
    padding: 2.5rem 3rem;
    text-align: start;
  }
`;
