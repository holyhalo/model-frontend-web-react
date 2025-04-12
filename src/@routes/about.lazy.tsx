import { createLazyFileRoute } from '@tanstack/react-router'
import AboutView from '@view/about.view'

export const Route = createLazyFileRoute('/about')({
  component: () => <AboutView />,
})