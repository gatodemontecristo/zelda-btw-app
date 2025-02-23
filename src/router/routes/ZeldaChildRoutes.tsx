import { Navigate } from 'react-router-dom';
import { ZeldaDetail, ZeldaMain } from '../../pages';

export const ZeldaChildRoutes = [
  { path: 'main', element: <ZeldaMain /> },
  { path: 'detail/:zeldaId', element: <ZeldaDetail /> },
  { path: '/*', element: <Navigate to="/main" /> },
  { path: '/', element: <Navigate to="/main" /> },
];
