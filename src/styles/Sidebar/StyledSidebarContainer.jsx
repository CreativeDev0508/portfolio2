import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSidebarContainer = styled(motion.div)`
  position: fixed;
  left: -1.5rem;
  right: auto;
  top: 68.5%;
  display: flex;
  flex-direction: column;
  z-index: 10000;
  padding: 1rem 0 1rem 1rem;
  border-radius: 1.5rem;
  border-top: 1.5px solid
    ${props =>
      props.atBottom
        ? props.theme.neutrals.footerText
        : props.theme.tertiary.sidebarBorder};
  border-bottom: 1.5px solid
    ${props =>
      props.atBottom
        ? props.theme.neutrals.footerText
        : props.theme.tertiary.sidebarBorder};
  transition: border-bottom 0.3s;
`;
