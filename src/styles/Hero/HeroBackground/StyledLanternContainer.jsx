import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLanternContainer = styled(motion.button)`
  width: 7rem;
  position: absolute;
  left: 23rem;
  bottom: 0.2rem;
  background-color: transparent;
  cursor: pointer;
  z-index: 1499;

  & svg {
    z-index: 50;
  }
  & div {
    position: absolute;
    bottom: 2.8rem;

    @media ${props => props.theme.bp.desktopXS} {
      bottom: 3.8rem;
    }
    @media ${props => props.theme.bp.tabletS} {
      bottom: 2rem;
    }
  }

  @media ${props => props.theme.bp.desktopL} {
    left: 21rem;
    bottom: -1rem;
  }
  @media ${props => props.theme.bp.desktopXS} {
    width: 9rem;
    left: 7.5rem;
    bottom: -17rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    width: 6rem;
    left: 6rem;
    bottom: -11rem;
  }
  @media ${props => props.theme.bp.mobileL} {
    left: 3rem;
  }
  @media ${props => props.theme.bp.mobileM} {
    bottom: -18rem;
  }
`;
