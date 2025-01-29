import type { RouteObject } from 'react-router-dom';

import { BaseLayout } from '@app/layouts/BaseLayout';
import { ErrorPage, NotFoundPage } from '@pages/index';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';

import { routesConfig } from './routes.config';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: (
      <Suspense fallback=''>
        <ErrorPage />
      </Suspense>
    ),
    children: Object.values(routesConfig satisfies Record<string, RouteObject>)
  },
  { path: '*', element: <NotFoundPage /> }
]);

export const RouterProvider = () => <ReactRouterProvider router={appRouter} />;
