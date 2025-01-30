import { Meta, StoryObj } from '@storybook/react'
import { delay, http, HttpResponse } from 'msw'
import { restaurants } from 'stub/restaurants'
import { BASE_URL } from 'api'

import { RestaurantsSection } from './RestaurantsSection'

export default {
  title: 'Pages/HomePage/Components/RestaurantsSection',
  component: RestaurantsSection,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=135-311&t=BLZzE2QFi13McAkk-4',
    },
  },
} satisfies Meta<typeof RestaurantsSection>

type RestaurantSectionStory = StoryObj<typeof RestaurantsSection>

export const Default: RestaurantSectionStory = {
  parameters: {
    // msw: {
    //   handlers: [http.get(BASE_URL, () => HttpResponse.json(restaurants))],
    // },
  },
  args: {
    title: 'Our favorite picks',
  },
}

export const Loading: RestaurantSectionStory = {
  parameters: {
    // msw: {
    //   handlers: [http.get(BASE_URL, () => delay('infinite'))],
    // },
  },
  args: {
    ...Default.args,
  },
}
