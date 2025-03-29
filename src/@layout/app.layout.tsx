import { RouterProvider, createRouter } from '@tanstack/react-router'
import { Providers } from './providers.layout'

import { routeTree } from '../routeTree.gen'

// @ts-ignore
const router = createRouter({
  routeTree,
})

export default function App() {
  return (
    <Providers>
      <div className="w-full min-h-full px-[12.5rem] pt-[.4rem] pb-[8rem]">
        <RouterProvider router={router} />
      </div>
    </Providers>
  )
}