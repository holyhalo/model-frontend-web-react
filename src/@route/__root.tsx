import { createRootRoute, redirect } from '@tanstack/react-router'
import AppHeader from '@app/header.app'
import AppNavbar from '@app/left.app'
import AppRight from '@app/right.app'
import AppBody from '@app/body.app'

export const Route = createRootRoute({
  beforeLoad: ({ location }) => {
    const is_authenticated = localStorage.getItem('id') !== null;
    const is_auth_page = location.pathname.startsWith('/auth/');

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
  notFoundComponent: () => (
    <div className="text-center pt-[8rem]">
      <h1 className="relative text-5xl md:text-6xl md:leading-tight font-bold md:text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500 mb-6">Not Found</h1>
    </div>
  ),
  wrapInSuspense: true,
})