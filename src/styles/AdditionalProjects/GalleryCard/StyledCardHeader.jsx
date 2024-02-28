import styled, { css } from 'styled-components';

export const StyledCardHeader = styled.header`
  background-color: transparent;
  & button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    letter-spacing: 0.01rem;
    font-weight: 500;
    & svg {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
  ${props =>
    props.isCardOpened &&
    css`
      display: none;
    `}
`;
