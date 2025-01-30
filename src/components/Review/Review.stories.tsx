import { Meta, StoryObj } from '@storybook/react'

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

export const Default: ReviewStory = {}
export const Excellent: ReviewStory = {
  args: {
    rating: 5,
  },
}

export const VeryGood = {
  args: {
    rating: 4.3,
  },
}

export const Adequate = {
  args: {
    rating: 2.5,
  },
}

export const VeryPoor = {
  args: {
    rating: 1,
  },
}
