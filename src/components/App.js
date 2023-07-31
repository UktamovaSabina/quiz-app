import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import components
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { ChechUserExist } from '../helper/helper';


// react routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/quiz',
    element: <ChechUserExist><Quiz /></ChechUserExist>
  },
  {
    path: '/result',
    element: <ChechUserExist><Result /></ChechUserExist>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
