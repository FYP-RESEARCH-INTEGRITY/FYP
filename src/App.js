import './App.css';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Upload from './Pages/Upload';

import {
  createBrowserRouter,
  createRoutesFromElements,

  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Upload" element={<Upload />} />
    </Route>
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
