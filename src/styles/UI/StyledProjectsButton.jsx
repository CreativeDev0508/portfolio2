import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledProjectButton = styled(motion.button)`
  justify-self: center;
  border: 0.12rem solid ${props => props.theme.tertiary.linkBorder};
  background-color: transparent;
  padding: 1.45rem 2.45rem;
  position: absolute;
  bottom: 2.5rem;
  z-index: 999;
`;
