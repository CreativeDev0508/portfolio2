import styled from 'styled-components';

export const StyledSectionHeading = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
  text-transform: capitalize;
  & h2 {
    font-family: ${props =>
      props.lang === 'en'
        ? props.theme.fonts.secondary
        : props.theme.fonts.tertiary};
    letter-spacing: ${props => (props.lang === 'ja' ? '-0.6rem' : '0')};
  }
`;
