import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import Layout from '../layouts/Layout';
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
        { index: true, element: <Home /> },
        { path: 'restaurant', element: <Restaurant /> },
        { path: 'roll/:id', element: <Roll /> },
        { path: 'search', element: <Search /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="restaurant" state={{ from: location }} replace />,
    },
  ]);

  return element;
};

export default AppRoutes;
