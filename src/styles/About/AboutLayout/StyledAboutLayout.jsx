import styled, { css } from 'styled-components';

export const StyledAboutSection = styled.section`
  position: relative;
  padding: 16rem 0;
  /* Previous style no white fade */
  /* background-image: linear-gradient(
      to bottom,
      ${props => props.theme.neutrals.aboutBackdrop} 0%,
      rgba(194, 178, 128, 0.3) 40%
    ),
    url(src/assets/images/illustrations/water-color.jpg); */

  background-image: linear-gradient(
      to bottom,
      ${props => props.theme.neutrals.aboutBackdrop} 0%,
      rgba(194, 178, 128, 0.3) 40%,
      rgba(194, 178, 128, 0.25) 50%,
      rgba(194, 178, 128, 0.2) 60%,
      rgba(194, 178, 128, 0.1) 90%,
      rgba(194, 178, 128, 0.05) 92%,
      rgba(255, 255, 255, 0.85) 99%,
      rgba(255, 255, 255, 0.9) 99.3%
    ),
    url('/water-color-sm.webp');

  ${props =>
    props.pageTheme === 'dark' &&
    css`
      background-image: linear-gradient(
          to bottom,
          rgba(207, 215, 225, 1),
          rgba(40, 62, 81, 0.7),
          rgba(40, 62, 81, 0.9),
          rgba(40, 62, 81, 1)
        ),
        url('/water-color-sm.webp');
    `}

  @media ${props => props.theme.bp.mobileL} {
    ${props =>
      props.pageTheme === 'dark' &&
      css`
        background-image: linear-gradient(
            to bottom,
            rgba(207, 215, 225, 1) 15%,
            rgba(40, 62, 81, 0.7),
            rgba(40, 62, 81, 0.9),
            rgba(40, 62, 81, 1)
          ),
          url('/water-color-sm.webp');
      `}
  }

  background-repeat: no-repeat;
  background-size: cover;
  /* background-position-x: 70rem; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-columns: 45% 55%; */
  grid-template-rows: min-content 1fr;
  row-gap: 6rem;
  @media ${props => props.theme.bp.desktopL} {
    grid-template-columns: 48% 52%;
  }
  @media ${props => props.theme.bp.desktopXS} {
    grid-template-columns: 1fr;
  }
  @media ${props => props.theme.bp.mobileL} {
    grid-template-rows: min-content 1fr 1fr;
    row-gap: 0;
    overflow: hidden;
    padding: 6rem 0;
    padding-top: 10rem;
  }
`;
