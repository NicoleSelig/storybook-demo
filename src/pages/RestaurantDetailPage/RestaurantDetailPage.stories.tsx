// eslint-disable-next-line storybook/story-exports
export default {}

// import { ComponentMeta, ComponentStory } from '@storybook/react'
// import { delay, http, HttpResponse } from 'msw'
// import { restaurants } from 'stub/restaurants'
// import { BASE_URL } from 'api'

// import { RestaurantDetailPage } from './RestaurantDetailPage'

// export default {
//   title: 'Pages/RestaurantDetailPage',
//   component: RestaurantDetailPage,
//   parameters: {
//     layout: 'fullscreen',
//     deeplink: {
//       path: '/restaurants/:id',
//       route: '/restaurants/2',
//     },
//   },
// } as ComponentMeta<typeof RestaurantDetailPage>

// const Template: ComponentStory<typeof RestaurantDetailPage> = () => (
//   <>
//     <RestaurantDetailPage />
//     <div id="modal"></div>
//   </>
// )

// export const Success = Template.bind({})
// Success.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/proto/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=169-510&t=OFGjwScaUvVP7w03-0&scaling=min-zoom&content-scaling=fixed&page-id=135%3A257&starting-point-node-id=135%3A258',
//   },
//   msw: {
//     handlers: [http.get(BASE_URL, () => HttpResponse.json(restaurants[0]))],
//   },
// }

// export const Loading = Template.bind({})
// Loading.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=2152-3158&t=OFGjwScaUvVP7w03-4',
//   },
//   msw: {
//     handlers: [http.get(BASE_URL, () => delay('infinite'))],
//   },
// }

// export const NotFound = Template.bind({})
// NotFound.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=2152-3158&t=OFGjwScaUvVP7w03-4',
//   },
//   msw: {
//     handlers: [
//       http.get(BASE_URL, () => HttpResponse.json({ error: 'Not Authorized' }, { status: 404 })),
//     ],
//   },
// }

// export const Error = Template.bind({})
// Error.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=2152-3158&t=OFGjwScaUvVP7w03-4',
//   },
//   msw: {
//     handlers: [
//       http.get(BASE_URL, () =>
//         HttpResponse.json({ error: 'Internal Server Error' }, { status: 500 })
//       ),
//     ],
//   },
// }
