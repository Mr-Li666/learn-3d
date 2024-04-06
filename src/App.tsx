import './App.less';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes/conts';
const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
