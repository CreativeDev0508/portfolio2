import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: 1.7fr 1fr;
  height: 75rem;
  margin-top: 8rem;
  background: linear-gradient(
    to bottom,
    transparent,
    ${props => props.theme.gradients.footerBgBottom},
    ${props => props.theme.gradients.footerBgTop} 80%
  );
  @media ${props => props.theme.bp.desktopXS} {
    margin-top: 0;
  }
  @media ${props => props.theme.bp.tabletS} {
    height: auto;
  }
  @media ${props => props.theme.bp.mobileM} {
    height: 70rem;
  }
`;
