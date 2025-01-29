// eslint-disable-next-line storybook/story-exports
export default {}
// import { ComponentStory, Meta } from '@storybook/react'
// import { cartItems } from 'stub/cart-items'
// import { PropsWithChildren } from 'react'
// import { JSX } from 'react/jsx-runtime'

// import { PageTemplate } from './PageTemplate'

// const meta: Meta<typeof PageTemplate> = {
//   title: 'Templates/PageTemplates',
//   component: PageTemplate,
//   parameters: {
//     layout: 'fullscreen',
//   },
// }
// export default meta
// // export default {
// //   title: 'Templates/PageTemplates',
// //   component: PageTemplate,
// //   parameters: {
// //     layout: 'fullscreen',
// //   },
// // } as ComponentMeta<typeof PageTemplate>

// // Just to make the story a bit more understandable for the users
// const DummyComponent: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }: PropsWithChildren) => <div style={{ padding: 60 }}>{children}</div>

// const Template: ComponentStory<typeof PageTemplate> = (
//   args: JSX.IntrinsicAttributes & { type?: 'default' | 'sticky-header' | 'basic' }
// ) => <PageTemplate {...args} />

// export const Default = Template.bind({})
// Default.args = {
//   children: (
//     <DummyComponent>
//       Default template with scrollable header and navigation items + footer
//     </DummyComponent>
//   ),
// }

// export const WithItemsInTheCart = Template.bind({})
// WithItemsInTheCart.parameters = {
//   store: {
//     initialState: { cart: { items: cartItems } },
//   },
// }

// export const StickyHeader = Template.bind({})
// StickyHeader.args = {
//   type: 'sticky-header',
//   children: (
//     <DummyComponent>
//       Template with sticky header on desktop and navigation items. Try Scrolling!
//     </DummyComponent>
//   ),
// }

// export const Basic = Template.bind({})
// Basic.args = {
//   type: 'basic',
//   children: (
//     <DummyComponent>
//       Simple Template with scrollable header and no navigation items and no footer
//     </DummyComponent>
//   ),
// }
