import styled, { css } from 'styled-components'

import { Body4Styles } from '../Text'
import { TooltipProps } from './types'

export const Tooltip = styled.span.attrs(({ role }) => ({
  role: role ?? 'tooltip',
}))<TooltipProps>`
  ${Body4Styles}
  background-color: ${({ theme }) => theme.colors.neutral.grey10};
  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => theme.shadows.extralight};
  color: ${({ theme }) => theme.colors.text.white};
  max-width: 17.5rem;
  padding: 0.5rem;
  width: max-content;

  a {
    text-decoration: underline;
  }
`

export const TooltipStyles = css`
  position: absolute;
  z-index: 1;
`

export const HiddenTooltipStyles = css`
  opacity: 0;
  visibility: hidden;
`

export const VisibleTooltipStyles = css`
  opacity: 1;
  transition:
    opacity 0.2s ease-in 0.5s,
    visibility 0.2s ease-in 0.5s;
  visibility: visible;
`

export const Container = styled.span`
  position: relative;

  ${Tooltip} {
    ${TooltipStyles}
    ${HiddenTooltipStyles}
  }

  &:hover ${Tooltip} {
    ${VisibleTooltipStyles}
  }
`
