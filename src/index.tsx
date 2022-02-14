import 'styled-components/macro'

import { createTheme, ThemeProvider } from '@mui/system'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import type {} from 'styled-components/cssprop'

import { Bench } from './Bench'

const theme = createTheme({
  palette: {
    type: 'dark',
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Bench />
      </StyledThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
