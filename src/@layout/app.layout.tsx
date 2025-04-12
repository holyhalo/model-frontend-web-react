import { RouterProvider, createRouter } from '@tanstack/react-router'
import { Providers } from './providers.layout'
import AppLoader from './app-loader.layout'

import { routeTree } from '../routeTree.gen'

// @ts-ignore
const router = createRouter({
  routeTree,
})

export default function App() {
  return (
    <Providers>
      <RouterProvider router={router} defaultPendingComponent={AppLoader} />
    </Providers>
  )
}