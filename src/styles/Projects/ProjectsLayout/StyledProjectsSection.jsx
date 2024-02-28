import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledProjectsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  row-gap: 6rem;
  padding: 8rem 0 12rem 0;
  margin: 0 auto;
  max-width: 107rem;
  position: relative;

  @media ${props => props.theme.bp.desktopS} {
    margin: 0 12rem;
  }

  @media ${props => props.theme.bp.desktopXS} {
    padding-top: 6rem;
  }

  @media ${props => props.theme.bp.tabletL} {
    margin: 0;
  }
`;

export const StyledProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14rem;

  @media ${props => props.theme.bp.mobileL} {
    gap: 6rem;
  }
`;

export const StyledProjectItem = styled(motion.li)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  align-items: center;

  @media ${props => props.theme.bp.tabletL} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content;
    gap: 2rem;
    /* Disable slide animation when the project image takes up the entire view-width */
    transform: translateX(0) !important;
  }

  ${props =>
    props.alternate &&
    css`
      @media ${props => props.theme.bp.tabletL} {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr min-content;
        gap: 2rem;
      }
    `}
`;
