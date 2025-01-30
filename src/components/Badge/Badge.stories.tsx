import { Meta, StoryObj } from '@storybook/react'

import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  args: {
    text: 'Comfort food',
  },
  // tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1906-3469&t=Y2icuZXpTaBhcSA0-4',
    },
  },
}

export default meta

type BadgeStory = StoryObj<typeof Badge>

export const Default: BadgeStory = {
  args: {
    text: 'Comfort Food',
  },
}

export const DarkTheme: BadgeStory = {
  parameters: {
    theme: 'dark',
  },
}
