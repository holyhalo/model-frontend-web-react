import { createRootRoute } from '@tanstack/react-router'
import AppHeader from '@layout/app-header.layout'
import AppNavbar from '@layout/app-left.layout'
import AppRight from '@layout/app-right.layout'
import AppBody from '@layout/app-body.layout'
import ViewNotFound from '@view/not-found.view'

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <AppHeader />
        <AppNavbar />
        <AppRight />
        <AppBody />
      </>
    )
  },
  notFoundComponent: () => <ViewNotFound />,
  wrapInSuspense: true,
})