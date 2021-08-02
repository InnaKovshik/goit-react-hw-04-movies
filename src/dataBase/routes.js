import { lazy } from 'react';

const HomePage = lazy(() => {
  return import('../pages/HomePage');
});

const MoviesPage = lazy(() => {
  return import('../pages/MoviesPage');
});

const MovieDitails = lazy(() => {
  return import('../pages/MovieDitails');
});

const NotFound = lazy(() => {
  return import('../components/NotFound');
});

const routes = [
  {
    key: 1,
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    key: 2,
    path: '/movies',
    component: MoviesPage,
    exact: true,
  },
  {
    key: 3,
    path: '/movies/:movieId',
    component: MovieDitails,
    exact: false,
  },
  {
    key: 4,
    component: HomePage,
    exact: false,
  },
];

export default routes;
