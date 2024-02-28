import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSkillItem = styled(motion.li)`
  padding: 1.4rem 2rem;
  text-transform: none;
  border: none;
  box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 15%);
  background-color: ${props => props.theme.primary.skillLiBg};
  color: ${props => props.theme.primary.skillLiText};
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 600;
  font-size: 1.8rem;
  @media ${props => props.theme.bp.mobileL} {
    font-size: 1.2rem;
    padding: 1rem 1.6rem;
  }
`;
