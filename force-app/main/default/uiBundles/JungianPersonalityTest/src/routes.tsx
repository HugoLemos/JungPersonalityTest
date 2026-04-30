import type { RouteObject } from 'react-router';
import AppLayout from '@/appLayout';
import Home from './pages/Home';
import Questionnaire from './pages/Questionnaire';
import Results from './pages/Results';
import NotFound from './pages/NotFound';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { showInNavigation: false, label: 'Home' },
      },
      {
        path: 'questionnaire',
        element: <Questionnaire />,
        handle: { showInNavigation: false, label: 'Questionnaire' },
      },
      {
        path: 'results',
        element: <Results />,
        handle: { showInNavigation: false, label: 'Results' },
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
