import { Routes, Route } from 'react-router-dom';

import { StartPage } from './pages';


export const AppRoutes = () => (
  <Routes>
    <Route element={ <StartPage /> } path="/" />
  </Routes>
);
