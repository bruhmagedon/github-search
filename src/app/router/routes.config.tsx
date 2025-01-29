import type { RouteObject } from 'react-router-dom';

import { FavoritesPage, RepositoryDetailsPage, SearchPage } from '@pages/index';

export const routesConfig = {
  index: {
    index: true,
    element: <SearchPage />
} satisfies RouteObject,

  donate: {
    path: '/favorites',
    element: <FavoritesPage />
  } satisfies RouteObject,

  statistic: {
    path: '/repository/:owner/:repo',
    element: <RepositoryDetailsPage />
  } satisfies RouteObject
};
