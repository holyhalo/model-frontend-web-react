import { RouterProvider, createRouter } from '@tanstack/react-router'
import { MantineProvider, createTheme } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppLoader from './loader.app'
import { routeTree } from '../../routeTree.gen'

import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/charts/styles.css'
import '@mantine/code-highlight/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/nprogress/styles.css'
import '@mantine/spotlight/styles.css'
import '@mantine/tiptap/styles.css'

const theme = createTheme({
  colors: {
    brand: [
      '#cce9ff',
      '#b3dfff',
      '#99d4ff',
      '#80caff',
      '#66bfff',
      '#4db5ff',
      '#38bdf8',
      '#0099ff',
      '#0088e6',
      '#0077cc',
    ],
    accent: [
      '#fff7cc',
      '#fff0b3',
      '#ffe999',
      '#ffe280',
      '#ffdb66',
      '#ffd44d',
      '#ffcc33',
      '#e6b800',
      '#cca300',
      '#b38f00',
    ],
  },
  primaryColor: 'brand',
  primaryShade: 6,
  components: {
    Button: {
      defaultProps: {
        size: 'md'
      }
    },
    TextInput: {
      defaultProps: {
        size: 'md'
      }
    },
    PasswordInput: {
      defaultProps: {
        size: 'md'
      }
    },
    FileButton: {
      defaultProps: {
        size: 'md'
      }
    }
  }
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
})

const router = createRouter({
  routeTree,
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} defaultPendingComponent={AppLoader} />
      </MantineProvider>
    </QueryClientProvider>
  )
}
