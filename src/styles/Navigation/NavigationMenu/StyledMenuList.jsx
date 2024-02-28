import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMenuList = styled(motion.ul)`
  position: absolute;
  top: 6.5rem;
  right: 8rem;
  width: fit-content;
  z-index: 2000000;
  @media ${props => props.theme.bp.mobileM} {
    top: 4.5rem;
    right: 10rem;
  }
`;
