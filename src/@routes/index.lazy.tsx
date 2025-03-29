import { createLazyFileRoute } from '@tanstack/react-router'
import HomeView from '@view/home.view'

export const Route = createLazyFileRoute('/')({
  component: HomeView,
})