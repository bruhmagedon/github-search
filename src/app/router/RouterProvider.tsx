import { BaseLayout } from '@app/layouts/BaseLayout';
import { SearchPage } from '@pages/search/SearchPage';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';

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
    children: [
      { index: true, element: <SearchPage /> }
      //   { path: 'oauth/callback/*', element: <MainPage /> },
      //   { path: 'statistic', element: <StatisticPage /> },
      //   { path: 'donate', element: <DonatePage /> },
      //   { path: 'team', element: <TeamPage /> },
      //   { path: 'privacy', element: <PrivacyPage /> },
      //   { path: 'tos', element: <TermsPage /> },
      //   { path: 'cookie', element: <CookiePage /> },
      //   // TODO* пошла попизде из-за layout
      //   { path: '*', element: <NotFoundPage /> },
    ]
  }
]);

export const RouterProvider = () => <ReactRouterProvider router={appRouter} />;
