import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledFujiContainer = styled(motion.div)`
  position: absolute;
  /* bottom: -10.7rem; */
  bottom: -9.2rem;
  right: 0;
  width: 100rem;
  /* top: 52%; */
  /* top: 62%;
  right: 0; */
  z-index: 1000;

  /* Styles for when Fuji is in grid */
  /* right: -15rem; */

  /* grid-column: 1 / -1; */
  /* width: 100rem;
  width: 100%; */
  /* width: 100rem; */
  /* width: 63.5%; */

  @media ${props => props.theme.bp.desktopL} {
    bottom: -9.5rem;
  }

  @media ${props => props.theme.bp.desktopS} {
    transform: translateX(8.5rem);
  }

  @media ${props => props.theme.bp.desktopXS} {
    width: 100%;
    transform: translateX(0);
    transform: translateY(0);
    right: -37rem;
    /* right: auto; */
    position: absolute;
    /* bottom: -15rem; */
    /* bottom: -12rem; */
    /* bottom: 15rem; */
    /* position: relative; */

    width: 75rem;
    right: 0;
  }

  @media ${props => props.theme.bp.tabletS} {
    width: 60rem;
    bottom: -8rem;
  }

  @media ${props => props.theme.bp.mobileL} {
    /* width: 55rem; */
    width: 70rem;
    transform: translateX(13rem);
  }
  @media ${props => props.theme.bp.mobileM} {
    /* width: 45rem;
    bottom: -5rem;
    transform: translateX(2.5rem); */

    /* transform: translateX(20rem); */
  }

  & svg {
    width: 100%;
    height: 100%;
    max-width: 100%;
    @media ${props => props.theme.bp.desktopXS} {
      /* width: 100%;
      width: 110rem;
      height: 50rem; */
      /* position: absolute; */
      /* bottom: -5rem;
      right: -12.5rem; */
      width: 100%;
      width: 75rem;

      width: 100%;
      height: 100%;
      max-width: 100%;

      /* height: 39rem; */
      /* height: 35rem; */
    }
    /* Use height: 100rem for initial layout idea (not ideal) */
    /* height: 100rem; */
    /* Settings to consider for keeping height in check */
    /* height: 38rem;
bottom: -7rem; */
  }
`;
