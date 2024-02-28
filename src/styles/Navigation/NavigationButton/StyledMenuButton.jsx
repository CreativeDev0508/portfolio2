import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMenuButton = styled.button`
  outline: none;
  border: none;
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
  background: transparent;
  z-index: 10000000;
  transition: all 0.2s;
  :hover {
    box-shadow: ${props => props.theme.tertiary.navigationBorder} 0px 0px 1rem;
  }
  & svg {
    padding-top: 0.2rem;
    padding-left: 0.1rem;
  }
`;

// For hamburger menu bars (SVG path)
export const StyledPath = styled(motion.path)`
  transition: all 0.2s;
  fill: transparent;
  stroke-width: 0.3rem;
  stroke: ${props => props.theme.primary.navigationBars};
  stroke-linecap: round;
`;
