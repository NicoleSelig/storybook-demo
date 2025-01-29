// .storybook/decorators.tsx
import { ThemeProvider } from 'styled-components'
import { Decorator, StoryFn } from '@storybook/react'

import { GlobalStyle } from '../src/styles/GlobalStyle'
import { darkTheme, lightTheme } from '../src/styles/theme'
import React from 'react'

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
export const globalDecorators = [withTheme]
