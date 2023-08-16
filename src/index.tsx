import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Toolbar from './components/Toolbar'
import WhiteBoard from './components/WhiteBoard'
import GhostNodeProvider from './providers/GhostNodeProvider'
import NodesProvider from './providers/NodesProvider'
import ErrorBoundary from './services/erroring/ErrorBoundary'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ErrorBoundary>
      <BrowserRouter>
        <NodesProvider>
          <GhostNodeProvider>
            <Toolbar />
            <WhiteBoard />
          </GhostNodeProvider>
        </NodesProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </ThemeProvider>
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
