import type { RouteObject } from 'react-router-dom';

import { BaseLayout } from '@app/layouts/BaseLayout';
import { NotFoundPage } from '@pages/index';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';

import { routesConfig } from './routes.config';

// TODO: Добавить ErrorBoundary
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: (
      <Suspense fallback=''>
        <div>Error</div>
      </Suspense>
    ),
    children: Object.values(routesConfig satisfies Record<string, RouteObject>)
  },
  { path: '*', element: <NotFoundPage /> }
]);

export const RouterProvider = () => <ReactRouterProvider router={appRouter} />;
