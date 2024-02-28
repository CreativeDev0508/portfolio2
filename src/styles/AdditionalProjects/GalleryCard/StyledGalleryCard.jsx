import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledGalleryCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  height: 100%;
  width: 100%;

  & button {
    background-color: transparent;
    font-size: 1.4rem;
  }

  ${props =>
    props.isCardOpened &&
    css`
      width: min(40rem, 95%);
      width: min(62rem, 95%);
      height: calc(100% - 10rem);
      overflow-y: auto;
      overflow-x: hidden;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 10000002;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      gap: 0;
      @media ${props => props.theme.bp.tabletS} {
        width: min(50rem, 95%);
        height: calc(100% - 20rem);
      }
      @media ${props => props.theme.bp.mobileL} {
        width: min(60rem, 80%);
      }
    `}
`;
