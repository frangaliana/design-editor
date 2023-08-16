import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  bottom: 0;
  color: ${({ theme }) => theme.colors.primary.deepPurple};
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;

  svg {
    height: 4rem;
    width: 4rem;
  }
`
