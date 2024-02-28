import styled, { keyframes } from 'styled-components';

const horizontalDrift = keyframes`
    from {
        background-position: 0 0;
    }

    to {
        background-position: 200rem 0;
    }
`;

export const StyledHeroBgClouds = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('/bg_kumo_lg.png');
  animation: ${horizontalDrift} 45s linear infinite;
  -webkit-animation: ${horizontalDrift} 45s linear infinite;
  animation-duration: 45s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  /* Set to running for animation */
  animation-play-state: running;
  animation-name: ${horizontalDrift};
  z-index: 10;
  opacity: 0.4;

  @media ${props => props.theme.bp.tabletS} {
    display: none;
  }
`;
