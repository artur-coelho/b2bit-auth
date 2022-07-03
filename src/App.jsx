import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
