import { Meta, StoryObj } from '@storybook/react'
import { restaurants } from 'stub/restaurants'

import { RestaurantCard } from './RestaurantCard'

const meta: Meta<typeof RestaurantCard> = {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  args: {
    ...restaurants[0],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1091-2986&t=BLZzE2QFi13McAkk-4',
    },
  },
}
export default meta

type RestaurantCardStory = StoryObj<typeof RestaurantCard>

export const Default: RestaurantCardStory = {}
// Default.play = async ({ canvasElement, args }) => {
//   console.log('CANVAS: ', JSON.stringify(canvasElement, null, 2))
// }

export const New: RestaurantCardStory = {
  args: {
    isNew: true,
  },
}
export const Closed: RestaurantCardStory = {
  args: {
    isClosed: true,
  },
}

export const Loading: RestaurantCardStory = {
  args: {
    isLoading: true,
  },
}
