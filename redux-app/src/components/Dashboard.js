import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className='content-dashboard'>
          <h3>Bienvenido, {user.username}</h3>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
