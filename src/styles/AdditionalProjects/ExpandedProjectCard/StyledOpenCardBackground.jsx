import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledOpenCardBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 10000001;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.7);
  cursor: pointer;
`;
