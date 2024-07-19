import { DefaultLayout } from '@/layouts/DefaultLayout';
import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <DefaultLayout>
        <ScrollRestoration />
        <Outlet />
      </DefaultLayout>
    </>
  ),
});
