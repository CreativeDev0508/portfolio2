import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledProjectGallery = styled(motion.section)`
  padding: 0rem 0 12rem 0;
  margin: 0 auto;
  max-width: 107rem;
  display: grid;
  row-gap: 4rem;
  column-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  position: relative;

  @media ${props => props.theme.bp.desktopS} {
    grid-template-columns: repeat(2, 1fr);
    max-width: 75rem;
  }

  @media ${props => props.theme.bp.desktopXS} {
    grid-template-columns: repeat(2, 1fr);
    max-width: 70rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    grid-template-columns: 1fr;
    max-width: 35rem;
  }

  & div {
    border-radius: 0.2rem;
  }
`;
