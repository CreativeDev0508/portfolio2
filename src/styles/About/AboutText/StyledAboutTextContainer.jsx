import styled from 'styled-components';
import { motion } from 'framer-motion';

// About text
export const StyledAboutTextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  height: 100%;
  /* grid-column: 2 / -1; */
  position: relative;
  max-width: 50rem;
  /* margin-right: 75rem; */
  padding-right: 5rem;
  z-index: 100000;
  & p {
    @media ${props => props.theme.bp.tabletS} {
      font-size: 1.4rem;
    }
    @media ${props => props.theme.bp.mobileM} {
      font-size: 1.2rem;
      padding: 0 2rem;
    }
  }
  @media ${props => props.theme.bp.desktopM} {
    padding-left: 1rem;
  }
  @media ${props => props.theme.bp.desktopS} {
    padding-left: 5rem;
  }
  @media ${props => props.theme.bp.desktopXS} {
    padding-left: 0;
    align-self: center;
    justify-self: center;
  }
  @media ${props => props.theme.bp.tabletS} {
    max-width: 38rem;
  }
  @media ${props => props.theme.bp.mobileL} {
    padding-right: 0;
    padding-top: 2rem;
  }
`;
