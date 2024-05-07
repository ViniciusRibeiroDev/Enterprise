import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../Pages/Home';
import { LoginPage } from '../Pages/Login';
import { RegisterPage } from '../Pages/Register';
import { DashboardPage } from '../Pages/Dashboard';

export const RoutesPages = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/cadastro',
    element: <RegisterPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
]);
