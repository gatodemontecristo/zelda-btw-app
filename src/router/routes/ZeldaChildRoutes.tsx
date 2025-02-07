import { Navigate } from 'react-router-dom';
import { ZeldaMain } from '../../pages';

export const ZeldaChildRoutes = [
  { path: 'main', element: <ZeldaMain /> },
  { path: '/*', element: <Navigate to="/main" /> },
  { path: '/', element: <Navigate to="/main" /> },
];
