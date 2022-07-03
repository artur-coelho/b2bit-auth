import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />}>
        {/* public routes */}
      </Route>
    </Routes>
  );
};

export default App;
