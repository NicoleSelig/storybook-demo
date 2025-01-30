// .storybook/decorators.tsx
import { ThemeProvider } from 'styled-components'
import { Decorator } from '@storybook/react'
import { store } from '../src/app-state'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from '../src/styles/GlobalStyle'
import { darkTheme, lightTheme } from '../src/styles/theme'
import React from 'react'

export const withRouter: Decorator = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )
}

export const withStore: Decorator = (Story) => {
  return (
    <StoreProvider store={store}>
      <Story />
    </StoreProvider>
  )
}

const withTheme: Decorator = (Story, context) => {
  const theme = context.parameters.theme || context.globals.theme
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme
  return (
      <ThemeProvider theme={storyTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
  )
}

// export all decorators that should be globally applied in an array
export const globalDecorators = [withTheme, withStore, withRouter]
