import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledOpenCardDescription = styled(motion.div)`
  & p {
    color: ${props => props.theme.primary.p};
    @media ${props => props.theme.bp.mobileM} {
      font-size: 1.2rem;
    }
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.4rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.5;

    font-family: ${props => props.theme.fonts.primary};
    @media ${props => props.theme.bp.mobileM} {
      font-size: 1rem;
    }
  }
`;
