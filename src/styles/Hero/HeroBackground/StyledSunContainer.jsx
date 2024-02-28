import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSunContainer = styled(motion.div)`
  position: absolute;
  /* Consider this position - looks nice */
  bottom: 0;
  right: 0;
  /*  */

  /* For when container is not relative to Mt. Fuji */
  bottom: 18rem;
  bottom: 21.5rem;
  right: 34.3rem;
  right: 31.5rem;

  /* bottom: 27.5%;
  right: 25%;
  right: 22.5%; */

  z-index: 1;

  /* width: 100%;
  height: 100%;
  position: absolute; */
  /* bottom: -10.7rem; */
  /* right: 0; */
  height: 26.6rem;
  width: 26.6rem;

  height: 32rem;
  width: 32rem;

  @media ${props => props.theme.bp.desktopL} {
    right: 33.9rem;
    height: 26.6rem;
    width: 26.6rem;
  }

  @media ${props => props.theme.bp.desktopM} {
    right: 34.1rem;
  }

  @media ${props => props.theme.bp.desktopS} {
    /* transform: translateX(8rem); */
    right: 25.3rem;
  }

  @media ${props => props.theme.bp.desktopXS} {
    /* right: 30.6rem;
    right: 36rem; */
    /* position: static;
    grid-row: 1 / 2;
    justify-self: center; */
    /* height: 100%; */
    /* height: 20rem;
    width: auto; */
    /* height: 27.7rem;
    width: 27.7rem; */

    height: 24rem;
    width: 24rem;
    right: 23rem;
    left: auto;
    bottom: 12rem;
    /* height: fit-content;
    width: fit-content; */
  }

  @media ${props => props.theme.bp.tabletL} {
    height: 22rem;
    width: 22rem;
    right: 24rem;
  }

  @media ${props => props.theme.bp.tabletS} {
    height: 20rem;
    width: 20rem;
    right: 18.5rem;
    bottom: 10rem;
  }

  @media ${props => props.theme.bp.mobileL} {
    height: 18rem;
    width: 18rem;
    right: 17rem;

    right: 9.2rem;
    bottom: 16rem;
    height: 22rem;
    width: 22rem;

    transform: translate(0) !important;
  }

  @media ${props => props.theme.bp.mobileM} {
    /* height: 17rem;
    width: 17rem;
    right: 10.5rem; */
    /* right: 11.5rem; */
  }

  & svg {
    width: 100%;
    height: 100%;
    /* width: 27.7rem;
    height: 27.7rem; */
    /* width: auto; */
    height: 100%;
    max-width: 100%;
    filter: drop-shadow(
      0px 1px 1.7px
        ${props =>
          props.pageTheme === 'light'
            ? props.theme.tertiary.sunShadow
            : 'white'}
    );

    @media ${props => props.theme.bp.desktopXS} {
      /* width: 20rem;
      height: 20rem; */
      overflow: visible;
    }
  }
`;
