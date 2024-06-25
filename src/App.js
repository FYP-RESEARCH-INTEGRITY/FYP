import './App.css';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
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
      <Route index element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
    </Route>
  )
);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
