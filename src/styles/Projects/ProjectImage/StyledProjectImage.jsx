import styled, { css } from 'styled-components';

export const StyledProjectImageContainer = styled.div`
  & picture {
    max-width: 70rem;
    display: block;
    width: 62rem;
    height: 40rem;
    border-radius: 0.2rem;
    object-fit: cover;

    @media ${props => props.theme.bp.desktopS} {
      height: 32rem;
      width: 52rem;
    }

    @media ${props => props.theme.bp.tabletL} {
      height: auto;
      width: auto;
      width: 100%;
      height: auto;
      /* max-height: 40rem; */
      max-width: 100%;
    }

    & img {
      object-fit: cover;

      display: block;
      height: 100%;
      width: 100%;
      border-radius: 0.2rem;
    }
  }
`;

export const StyledProjectImage = styled.div`
  grid-column: 1 / 8;
  grid-area: 1 / 1 / -1 / 8;
  box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 15%);
  border-radius: 0.2rem;
  box-shadow: 0 1rem 2.5rem -1.8rem ${props => props.theme.primary.li};
  ${props =>
    props.pageTheme === 'dark' &&
    css`
      box-shadow: none;
    `}
  @media ${props => props.theme.bp.desktopS} {
    height: 32rem;
    width: 52rem;
  }

  @media ${props => props.theme.bp.tabletL} {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    height: auto;
    width: auto;
  }
  ${props =>
    props.alternate &&
    css`
      grid-column: 6 / -1;
      grid-area: 1 / 6 / -1 / -1;

      @media ${props => props.theme.bp.tabletL} {
        grid-column: 1 / -1;
        grid-row: 1 / 2;
        height: auto;
        width: auto;
      }
    `}
`;
