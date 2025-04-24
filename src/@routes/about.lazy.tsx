import { createLazyFileRoute } from '@tanstack/react-router'
import { Title } from '@mantine/core'

export const Route = createLazyFileRoute('/about')({
  component: () => {
    return (
      <div className="p-4">
        <Title>About Page</Title>
      </div>
    )
  }
})