import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const RoutesPages = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>/</h1>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '/home',
        element: (
          <div>
            <h1>/home</h1>
            <Outlet />
          </div>
        ),
        children: [
          {
            path: 'dashboard',
            element: <h1>/home/dashboard</h1>,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <div>/login</div>,
  },
]);
