import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLanguageButton = styled(motion.button)`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  & svg {
    width: 2.1rem;
    height: 2.1rem;
  }
`;
