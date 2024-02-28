import styled from 'styled-components';

export const StyledOpenContainer = styled.div`
  background-color: ${props => props.theme.primary.projectDescBg};
  padding: 4.5rem 3.5rem 3.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;
