import type { Preview } from '@storybook/react'
import { globalDecorators } from './decorators'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { initialize, mswLoader } from 'msw-storybook-addon'

initialize()

const preview: Preview = {
  decorators: globalDecorators,
  loaders: [mswLoader],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}


