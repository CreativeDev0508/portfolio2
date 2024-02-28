import styled, { css } from 'styled-components';

export const StyledThumbnail = styled.div`
  border-radius: 0.2rem;

  & picture {
    border-radius: 0.2rem;
    box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 20%);
    width: auto;
    height: 16.5rem;
    height: 19rem;
    height: 18.5rem;

    ${props =>
      props.isCardOpened &&
      css`
        height: 35rem;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        & img {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
        @media ${props => props.theme.bp.tabletS} {
          height: 25rem;
        }
        @media ${props => props.theme.bp.mobileM} {
          height: 20rem;
        }
      `}
  }
  & img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    object-fit: fill;
    border-radius: 0.2rem;
  }
`;
