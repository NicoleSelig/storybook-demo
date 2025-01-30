import { StoryObj, Meta } from '@storybook/react'
import { cartItems } from 'stub/cart-items'
import { PropsWithChildren } from 'react'

import { PageTemplate } from './PageTemplate'

export default {
  title: 'Templates/PageTemplates',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageTemplate>

// Just to make the story a bit more understandable for the users
const DummyComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}: PropsWithChildren) => <div style={{ padding: 60 }}>{children}</div>

type PageTemplateStory = StoryObj<typeof PageTemplate>

export const Default: PageTemplateStory = {
  args: {
    children: (
      <DummyComponent>
        Default template with scrollable header and navigation items + footer
      </DummyComponent>
    ),
  },
}

export const WithItemsInTheCart: PageTemplateStory = {
  parameters: {
    store: {
      initialState: { cart: { items: cartItems } },
    },
  },
}

export const StickyHeader: PageTemplateStory = {
  args: {
    type: 'sticky-header',
    children: (
      <DummyComponent>
        Template with sticky header on desktop and navigation items. Try Scrolling!
      </DummyComponent>
    ),
  },
}

export const Basic: PageTemplateStory = {
  args: {
    type: 'basic',
    children: (
      <DummyComponent>
        Simple Template with scrollable header and no navigation items and no footer
      </DummyComponent>
    ),
  },
}
