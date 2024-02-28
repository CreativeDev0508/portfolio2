import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const StyledCloudContainer = styled(motion.div)`
  width: 19rem;
  width: 22rem;
  position: absolute;
  bottom: 16.3rem;
  right: -12.7rem;
  right: -14.7rem;
  z-index: 100000;

  @media ${props => props.theme.bp.desktopL} {
    width: 19rem;
    bottom: 16.3rem;
    right: -12.7rem;
  }
  @media ${props => props.theme.bp.tabletL} {
    right: -12rem;
    bottom: 15.3rem;
  }

  @media ${props => props.theme.bp.tabletS} {
    width: 17rem;
    right: -10rem;
    bottom: 13rem;
  }

  @media ${props => props.theme.bp.mobileL} {
    width: 16rem;
    transform: translateX(0) !important;
  }

  @media ${props => props.theme.bp.mobileM} {
    /* width: 14rem; */
    /* right: -8rem; */
    /* bottom: 12rem; */
    bottom: 15rem;
    right: -9rem;
  }

  & svg {
    filter: none;
    ${props =>
      props.pageTheme === 'dark' &&
      css`
        filter: drop-shadow(0 0 0.25rem #343434) brightness(100%);
        opacity: 95%;
      `}
  }

  ${props =>
    props.left &&
    css`
      bottom: 5rem;
      right: 21.2rem;
      right: 23.2rem;
      @media ${props => props.theme.bp.desktopL} {
        width: 19rem;
        bottom: 5rem;
        right: 21.1rem;
      }
      @media ${props => props.theme.bp.desktopXS} {
    right: 19.5rem;
    @media ${props => props.theme.bp.tabletL} {
    right: 17.5rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    width: 17rem;
    right: 15.5rem;
  }
  @media ${props => props.theme.bp.mobileL} {
    /* In order to preserve the mirrored cloud while disabling the slide animations on mobile devices */
    transform: scaleX(-1) !important;
    width: 16rem;
    right: 13rem;
    bottom: 1.5rem;

    right: 15rem;
  }
  /* @media ${props => props.theme.bp.mobileM} {
    width: 14rem;
    right: 12.5rem
  } */
    `};
`;
