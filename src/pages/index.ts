import { lazy } from 'react';

export const SearchPage = lazy(() => import('./search/SearchPage'));
export const FavoritesPage = lazy(() => import('./favorites/FavoritesPage'));
export const RepositoryDetailsPage = lazy(() => import('./repository-details/RepositoryDetailsPage'));
export const ErrorPage = lazy(() => import('./error/ErrorPage'));
export const NotFoundPage = lazy(() => import('./not-found/NotFoundPage'));
