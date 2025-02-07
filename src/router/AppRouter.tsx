import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ZeldaChildRoutes, ZeldaRoutes } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ZeldaRoutes />,
    children: ZeldaChildRoutes,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
