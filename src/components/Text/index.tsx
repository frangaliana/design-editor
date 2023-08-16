import styled, { css } from 'styled-components'

export const Body4Styles = css`
  font-family: ${({ theme }) => theme.font.families.primary};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weights.normal};
  letter-spacing: 0.02em;
  line-height: 1rem;
`
export const Body4 = styled.span`
  ${Body4Styles}
`

export const H3Styles = css`
  font-family: ${({ theme }) => theme.font.families.primary};
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  line-height: ${({ theme }) => theme.font.lineHeights.xl};
`

export const H3 = styled.h3`
  ${H3Styles}
`
