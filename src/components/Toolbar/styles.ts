import styled from 'styled-components'

import Tooltip, { withTooltip } from '../Tooltip'
import IconButton from './IconButton'

export const Container = styled.div`
  align-items: end;
  bottom: 0;
  display: grid;
  justify-content: center;
  left: 0;
  padding-bottom: 1.5rem;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${({ theme }) => theme.elevations.toolbar};
`

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.background.white};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.light};
  display: grid;
  gap: 0.5rem;
  grid-auto-flow: column;
  padding: 0.5rem;
  pointer-events: auto;
`

export const WithTooltipIconButton = styled(withTooltip(IconButton))`
  ${Tooltip} {
    left: 0;
    bottom: calc(100% + 1rem);
  }
`
