import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../Pages/Home';

export const RoutesPages = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <div>/login</div>,
  },
]);
