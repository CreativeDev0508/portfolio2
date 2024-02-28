import styled, { css } from 'styled-components';

export const StyledSkillsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  row-gap: 6rem;
  place-items: center;
  padding: 12rem 0 14rem 0;
  background-image: linear-gradient(
      to top,
      rgb(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.05) 13%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.75) 90%
    ),
    url('/wisp.webp');

  ${props =>
    props.pageTheme === 'dark' &&
    css`
      background-image: linear-gradient(
          to bottom,
          rgba(40, 62, 81, 0.8) 20%,
          rgba(40, 62, 81, 0.5),
          rgba(40, 62, 81, 0.9)
        ),
        url('/wisp.webp');
    `}

  background-repeat: no-repeat;
  background-position: center;
  @media ${props => props.theme.bp.desktopXS} {
    padding-top: 8rem;
  }
  @media ${props => props.theme.bp.mobileL} {
    padding-bottom: 4rem;
    padding-top: 0;
  }
`;

export const StyledSkillsContainer = styled.div`
  max-width: 80rem;
`;
