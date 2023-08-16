import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FC, ReactElement, ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GhostNodeProvider from '../../providers/GhostNodeProvider'
import NodesProvider from '../../providers/NodesProvider'
import GlobalStyle from '../../styles/global'
import theme from '../../styles/theme'

const Provider: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div id="root">
      <MemoryRouter>
        <NodesProvider>
          <GhostNodeProvider>{children}</GhostNodeProvider>
        </NodesProvider>
      </MemoryRouter>
    </div>
  </ThemeProvider>
)

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Provider, ...options })

export * from '@testing-library/react'
export { customRender as render, userEvent }
