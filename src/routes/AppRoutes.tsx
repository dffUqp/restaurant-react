import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Restaurant from '../pages/Restaurant';
import Roll from '../pages/Roll/Roll';
import Search from '../pages/Search/Search';

const AppRoutes = () => {
  let location = useLocation();

  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Restaurant /> },
        { path: 'home', element: <Home /> },
        { path: 'roll/:id', element: <Roll /> },
        { path: 'search', element: <Search /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" state={{ from: location }} replace />,
    },
  ]);

  return element;
};

export default AppRoutes;
