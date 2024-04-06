import { Home, Root } from '@/pages';

export const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: 'home1',
        element: <>home1</>,
      },
    ],
  },
];
