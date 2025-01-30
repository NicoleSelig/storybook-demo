import { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'
import { restaurants } from 'stub/restaurants'
import { BASE_URL } from 'api'

import { HomePage } from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=135-258&t=OFGjwScaUvVP7w03-0',
    },
  },
} satisfies Meta<typeof HomePage>

type HomePageStory = StoryObj<typeof HomePage>

export const Default: HomePageStory = {
  parameters: {
    msw: {
      handlers: [http.get(BASE_URL, () => HttpResponse.json(restaurants))],
    },
  },
}
