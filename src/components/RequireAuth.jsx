import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { AuthService } from '../services';

const RequireAuth = () => {
  const location = useLocation();
  return AuthService.isLoggedIn() ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={location} replace />
  );
};

export default RequireAuth;
