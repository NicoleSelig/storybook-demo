import { Meta, StoryObj } from '@storybook/react'
import { restaurants } from 'stub/restaurants'
import { userEvent, within, fn } from '@storybook/test'
import { expect } from '@storybook/jest'

import { RestaurantCard } from './RestaurantCard'

const meta: Meta<typeof RestaurantCard> = {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  argTypes: { onClick: { action: 'card-clicked' } },
  args: {
    ...restaurants[0],
    onClick: fn(), // mocking the onClick function for interaction tests.
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

export const Default: RestaurantCardStory = {
  play: async ({ canvasElement, args, step }) => {
    await step('it should be clickable', async () => {
      const canvas = within(canvasElement)
      await userEvent.click(canvas.getByTestId('restaurant-card'))
      await expect(args.onClick).toHaveBeenCalled()
    })
  },
}

export const New: RestaurantCardStory = {
  args: {
    isNew: true,
  },
}

export const Closed: RestaurantCardStory = {
  args: {
    isClosed: true,
  },
  play: async ({ canvasElement, args, step }) => {
    await step('it should not be clickable', async () => {
      const canvas = within(canvasElement)
      await userEvent.click(canvas.getByTestId('restaurant-card'))
      await expect(args.onClick).not.toHaveBeenCalled()
    })
  },
}

export const Loading: RestaurantCardStory = {
  args: {
    isLoading: true,
  },
}
