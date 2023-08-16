import styled, { css } from 'styled-components'

import { ComponentProps } from './types'

export const Component = styled.div<ComponentProps>`
  background-color: ${({ theme }) => theme.colors.primary.brightPurple};
  border-radius: 0.25rem;
  height: 10rem;
  position: absolute;
  width: 10rem;
  z-index: ${({ theme }) => theme.elevations.whiteBoard.default};

  ${({ $ghosting }) =>
    $ghosting
      ? css`
          opacity: 0.3;
        `
      : css`
          &:hover {
            cursor: pointer;
          }

          &[aria-busy='true'] {
            cursor: move;
          }

          &[aria-selected='true'] {
            outline: none;
            box-shadow: 0 0 0 0.125rem
              ${({ theme }) => theme.colors.primary.midBlue};
            z-index: ${({ theme }) => theme.elevations.whiteBoard.selected};
          }
        `};
`
