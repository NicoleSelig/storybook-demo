// eslint-disable-next-line storybook/story-exports
export default {}

// import { ComponentMeta, ComponentStory } from '@storybook/react'
// import { delay, http, HttpResponse } from 'msw'
// import { restaurants } from 'stub/restaurants'
// import { BASE_URL } from 'api'

// import { RestaurantsSection } from './RestaurantsSection'

// export default {
//   title: 'Pages/HomePage/Components/RestaurantsSection',
//   component: RestaurantsSection,
//   parameters: {
//     design: {
//       type: 'figma',
//       url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=135-311&t=BLZzE2QFi13McAkk-4',
//     },
//   },
// } as ComponentMeta<typeof RestaurantsSection>

// const Template: ComponentStory<typeof RestaurantsSection> = (args) => (
//   <RestaurantsSection {...args} />
// )

// export const Default = Template.bind({})
// Default.args = {
//   title: 'Our favorite picks',
// }
// Default.parameters = {
//   msw: {
//     handlers: [http.get(BASE_URL, () => HttpResponse.json(restaurants))],
//   },
// }

// export const Loading = Template.bind({})
// Loading.args = {
//   ...Default.args,
// }
// Loading.parameters = {
//   msw: {
//     handlers: [http.get(BASE_URL, () => delay('infinite'))],
//   },
// }
