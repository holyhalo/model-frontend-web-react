/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './@routes/__root'

// Create Virtual Routes

const ProfileLazyImport = createFileRoute('/profile')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const SettingsIndexLazyImport = createFileRoute('/settings/')()
const SettingsUpdateProfileLazyImport = createFileRoute(
  '/settings/update-profile',
)()
const SettingsUpdatePasswordLazyImport = createFileRoute(
  '/settings/update-password',
)()
const AuthSignUpLazyImport = createFileRoute('/auth/sign-up')()
const AuthSignInLazyImport = createFileRoute('/auth/sign-in')()
const AuthForgotPasswordLazyImport = createFileRoute('/auth/forgot-password')()

// Create/Update Routes

const ProfileLazyRoute = ProfileLazyImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./@routes/profile.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./@routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./@routes/index.lazy').then((d) => d.Route))

const SettingsIndexLazyRoute = SettingsIndexLazyImport.update({
  id: '/settings/',
  path: '/settings/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./@routes/settings/index.lazy').then((d) => d.Route),
)

const SettingsUpdateProfileLazyRoute = SettingsUpdateProfileLazyImport.update({
  id: '/settings/update-profile',
  path: '/settings/update-profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./@routes/settings/update-profile.lazy').then((d) => d.Route),
)

const SettingsUpdatePasswordLazyRoute = SettingsUpdatePasswordLazyImport.update(
  {
    id: '/settings/update-password',
    path: '/settings/update-password',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./@routes/settings/update-password.lazy').then((d) => d.Route),
)

const AuthSignUpLazyRoute = AuthSignUpLazyImport.update({
  id: '/auth/sign-up',
  path: '/auth/sign-up',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./@routes/auth/sign-up.lazy').then((d) => d.Route))

const AuthSignInLazyRoute = AuthSignInLazyImport.update({
  id: '/auth/sign-in',
  path: '/auth/sign-in',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./@routes/auth/sign-in.lazy').then((d) => d.Route))

const AuthForgotPasswordLazyRoute = AuthForgotPasswordLazyImport.update({
  id: '/auth/forgot-password',
  path: '/auth/forgot-password',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./@routes/auth/forgot-password.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/forgot-password': {
      id: '/auth/forgot-password'
      path: '/auth/forgot-password'
      fullPath: '/auth/forgot-password'
      preLoaderRoute: typeof AuthForgotPasswordLazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/sign-in': {
      id: '/auth/sign-in'
      path: '/auth/sign-in'
      fullPath: '/auth/sign-in'
      preLoaderRoute: typeof AuthSignInLazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/sign-up': {
      id: '/auth/sign-up'
      path: '/auth/sign-up'
      fullPath: '/auth/sign-up'
      preLoaderRoute: typeof AuthSignUpLazyImport
      parentRoute: typeof rootRoute
    }
    '/settings/update-password': {
      id: '/settings/update-password'
      path: '/settings/update-password'
      fullPath: '/settings/update-password'
      preLoaderRoute: typeof SettingsUpdatePasswordLazyImport
      parentRoute: typeof rootRoute
    }
    '/settings/update-profile': {
      id: '/settings/update-profile'
      path: '/settings/update-profile'
      fullPath: '/settings/update-profile'
      preLoaderRoute: typeof SettingsUpdateProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/settings/': {
      id: '/settings/'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/auth/forgot-password': typeof AuthForgotPasswordLazyRoute
  '/auth/sign-in': typeof AuthSignInLazyRoute
  '/auth/sign-up': typeof AuthSignUpLazyRoute
  '/settings/update-password': typeof SettingsUpdatePasswordLazyRoute
  '/settings/update-profile': typeof SettingsUpdateProfileLazyRoute
  '/settings': typeof SettingsIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/auth/forgot-password': typeof AuthForgotPasswordLazyRoute
  '/auth/sign-in': typeof AuthSignInLazyRoute
  '/auth/sign-up': typeof AuthSignUpLazyRoute
  '/settings/update-password': typeof SettingsUpdatePasswordLazyRoute
  '/settings/update-profile': typeof SettingsUpdateProfileLazyRoute
  '/settings': typeof SettingsIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/auth/forgot-password': typeof AuthForgotPasswordLazyRoute
  '/auth/sign-in': typeof AuthSignInLazyRoute
  '/auth/sign-up': typeof AuthSignUpLazyRoute
  '/settings/update-password': typeof SettingsUpdatePasswordLazyRoute
  '/settings/update-profile': typeof SettingsUpdateProfileLazyRoute
  '/settings/': typeof SettingsIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/profile'
    | '/auth/forgot-password'
    | '/auth/sign-in'
    | '/auth/sign-up'
    | '/settings/update-password'
    | '/settings/update-profile'
    | '/settings'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/profile'
    | '/auth/forgot-password'
    | '/auth/sign-in'
    | '/auth/sign-up'
    | '/settings/update-password'
    | '/settings/update-profile'
    | '/settings'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/profile'
    | '/auth/forgot-password'
    | '/auth/sign-in'
    | '/auth/sign-up'
    | '/settings/update-password'
    | '/settings/update-profile'
    | '/settings/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  ProfileLazyRoute: typeof ProfileLazyRoute
  AuthForgotPasswordLazyRoute: typeof AuthForgotPasswordLazyRoute
  AuthSignInLazyRoute: typeof AuthSignInLazyRoute
  AuthSignUpLazyRoute: typeof AuthSignUpLazyRoute
  SettingsUpdatePasswordLazyRoute: typeof SettingsUpdatePasswordLazyRoute
  SettingsUpdateProfileLazyRoute: typeof SettingsUpdateProfileLazyRoute
  SettingsIndexLazyRoute: typeof SettingsIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  ProfileLazyRoute: ProfileLazyRoute,
  AuthForgotPasswordLazyRoute: AuthForgotPasswordLazyRoute,
  AuthSignInLazyRoute: AuthSignInLazyRoute,
  AuthSignUpLazyRoute: AuthSignUpLazyRoute,
  SettingsUpdatePasswordLazyRoute: SettingsUpdatePasswordLazyRoute,
  SettingsUpdateProfileLazyRoute: SettingsUpdateProfileLazyRoute,
  SettingsIndexLazyRoute: SettingsIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/profile",
        "/auth/forgot-password",
        "/auth/sign-in",
        "/auth/sign-up",
        "/settings/update-password",
        "/settings/update-profile",
        "/settings/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/profile": {
      "filePath": "profile.lazy.tsx"
    },
    "/auth/forgot-password": {
      "filePath": "auth/forgot-password.lazy.tsx"
    },
    "/auth/sign-in": {
      "filePath": "auth/sign-in.lazy.tsx"
    },
    "/auth/sign-up": {
      "filePath": "auth/sign-up.lazy.tsx"
    },
    "/settings/update-password": {
      "filePath": "settings/update-password.lazy.tsx"
    },
    "/settings/update-profile": {
      "filePath": "settings/update-profile.lazy.tsx"
    },
    "/settings/": {
      "filePath": "settings/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
