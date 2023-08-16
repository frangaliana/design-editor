import styled from 'styled-components'

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.neutral.grey60};
  height: 100vh;
  overflow: hidden;
  position: relative;

  &[aria-busy='true'] {
    cursor: crosshair;
  }
`
