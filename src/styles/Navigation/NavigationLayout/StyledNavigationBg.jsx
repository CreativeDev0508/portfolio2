import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledNavigationBg = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 38rem;
  z-index: 1000000;
  /* Glassy background */
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(0.5rem);
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
`;
