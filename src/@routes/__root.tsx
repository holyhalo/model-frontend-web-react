import { createRootRoute, redirect } from '@tanstack/react-router'
import AppHeader from '@layout/app-header.layout'
import AppNavbar from '@layout/app-left.layout'
import AppRight from '@layout/app-right.layout'
import AppBody from '@layout/app-body.layout'
import ViewNotFound from '@view/not-found.view'

export const Route = createRootRoute({
  beforeLoad: ({ location }) => {
    const is_authenticated = localStorage.getItem('id') !== null;
    const is_auth_page = location.pathname === '/auth/sign-in' || location.pathname === '/auth/sign-up' || location.pathname === '/auth/forgot-password'

    if (!is_authenticated && !is_auth_page) {
      throw redirect({
        to: '/auth/sign-in'
      });
    }

    if (is_authenticated && is_auth_page) {
      throw redirect({
        to: '/'
      });
    }
  },
  component: () => {
    const is_auth_route = window.location.pathname.startsWith('/auth/');
    
    if (is_auth_route) {
      return <AppBody />;
    }

    return (
      <div className="w-full min-h-full">
        <AppHeader />
        
        <div className="px-4 lg:px-[14rem] pt-16 lg:pt-[0.025rem] pb-20 lg:pb-[8rem]">
          <div className="hidden lg:block">
            <AppNavbar />
            <AppRight />
          </div>
          <AppBody />
        </div>
      </div>
    );
  },
  notFoundComponent: () => <ViewNotFound />,
  wrapInSuspense: true,
})