import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { expect } from '@storybook/jest'

import { Review } from './Review'

const meta: Meta<typeof Review> = {
  title: 'Components/Review',
  component: Review,
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
}

export default meta

type ReviewStory = StoryObj<typeof Review>

export const Default: ReviewStory = {
  play: async ({ canvasElement, args, step }) => {
    await step('should have the correct label', async () => {
      const canvas = within(canvasElement)
      const label = await canvas.findByTestId('review-text')
      await expect(label).toHaveTextContent('No reviews yet')
    })
  },
}

export const Excellent: ReviewStory = {
  args: {
    rating: 5,
  },
}

export const VeryGood: ReviewStory = {
  args: {
    rating: 4.3,
  },
}

export const Adequate: ReviewStory = {
  args: {
    rating: 2.5,
  },
}

export const VeryPoor: ReviewStory = {
  args: {
    rating: 1,
  },
}
