import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Main from './components/Main';
import RequireAuth from './components/RequireAuth';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route path='/login' element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path='/main' element={<Main />} />
        </Route>
        <Route element={<Navigate to='/main' />} exact path='/'></Route>
      </Route>
    </Routes>
  );
};

export default App;
