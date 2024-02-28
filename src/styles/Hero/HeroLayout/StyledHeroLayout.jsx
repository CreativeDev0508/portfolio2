import styled from 'styled-components';

export const StyledHeroSectionBackdrop = styled.div`
  background-color: ${props => props.theme.neutrals.heroBackdrop};
  background: linear-gradient(
    to right,
    ${props => props.theme.gradients.heroSectionBackdropLeft} 50%,
    ${props => props.theme.gradients.heroSectionBackdropRight} 80%
  );
`;

export const StyledHeroSection = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  /* For mobile */
  height: 100svh;
  /* background: linear-gradient(to top, #0181f1, skyblue); */
  background: linear-gradient(
    176.3deg,
    ${props => props.theme.gradients.heroBgTop},
    ${props => props.theme.gradients.heroBgBottom} 88%,
    ${props => props.theme.gradients.heroBgBtmRtCorner} 90.7%
  );

  clip-path: polygon(0px 0px, 100% 0px, 100% 90%, 0px 100%);

  overflow: hidden;
  position: relative;

  @media ${props => props.theme.bp.desktopXS} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    clip-path: polygon(0px 0px, 100% 0px, 100% 94.5%, 0px 100%);
  }
`;

export const StyledHeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  place-items: end;
  height: 90%;
  margin: 0 10rem;
  max-width: 114rem;
  position: relative;
  @media ${props => props.theme.bp.desktopXS} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row: 2 / 3;
    margin: 0 18rem;
    place-items: center;
  }
  @media ${props => props.theme.bp.tabletS} {
    margin: 0 12rem;
  }
  @media ${props => props.theme.bp.mobileL} {
    margin: 0 6rem;
    grid-row: 1 / 2;
    grid-template-rows: 1fr 1fr 1fr;
    place-self: center;

    & div {
      grid-row: 2 / 3;
      z-index: 1500;
    }
  }
`;
