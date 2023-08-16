import styled from 'styled-components'

export const Component = styled.button`
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.icon.initial};
  height: 2rem;
  padding: 0.25rem;
  width: 2rem;

  &:enabled:hover {
    background-color: ${({ theme }) => theme.colors.clickables.hover};
    color: ${({ theme }) => theme.colors.icon.hover};
  }

  &:enabled:active,
  &:enabled:focus-visible {
    background-color: ${({ theme }) => theme.colors.clickables.pressed};
    color: ${({ theme }) => theme.colors.icon.pressed};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.icon.disabled};
    cursor: default;
  }
`
