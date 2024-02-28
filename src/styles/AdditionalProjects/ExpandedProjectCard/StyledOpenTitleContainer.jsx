import styled from 'styled-components';

export const StyledOpenTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h3 {
    line-height: 1;
    @media ${props => props.theme.bp.mobileM} {
      font-size: 2rem;
    }
  }
  & ul {
    display: flex;
    gap: 2rem;
    line-height: 1;

    & svg {
      @media ${props => props.theme.bp.mobileL} {
        height: 2.2rem;
        width: 2.2rem;
      }
    }
  }
`;
