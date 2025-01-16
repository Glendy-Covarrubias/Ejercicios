import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    const user = { username };
    dispatch(login(user));
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {
        isAuthenticated ? null : (<div className="login">
          <h2>Redux Authentication</h2>
          <p>Por favor inicia sesión</p>
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>)
      }
    </div>
  );
};

export default Login;
