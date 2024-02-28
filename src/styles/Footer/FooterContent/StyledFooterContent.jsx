import styled from 'styled-components';

export const StyledFooterContent = styled.div`
  background-color: ${props => props.theme.primary.footerContentBg};
  height: 100%;
  display: grid;
  grid-template-columns: 35% 65%;
  /* grid-template-columns: 1fr 1fr; */
  align-items: center;
  position: relative;
  @media ${props => props.theme.bp.tabletS} {
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content;
    row-gap: 2rem;
  }
  @media ${props => props.theme.bp.mobileM} {
    height: 40rem;
  }
`;
