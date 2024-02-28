import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMenuItem = styled(motion.li)`
  font-family: ${props =>
    props.lang === 'en'
      ? props.theme.fonts.secondary
      : props.theme.fonts.tertiary};
  letter-spacing: ${props => (props.lang === 'ja' ? '-0.3rem' : '0')};
  text-transform: capitalize;
  font-size: ${props => (props.lang === 'ja' ? '2.7rem' : '3rem')};
  font-weight: 600;
  width: fit-content;

  & :hover {
    color: ${props => props.theme.primary.navLinkHover};
  }
`;
