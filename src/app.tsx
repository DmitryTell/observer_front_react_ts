import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './app-routes';
import { GlobalStyle } from './style';


export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <AppRoutes />
  </BrowserRouter>
);
