import "./App.css";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Upload from "./Pages/Upload";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { auth } from "./Pages/firebase";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={user ? <Navigate to={"/Upload"} /> : <Signup /> } />
        {/* <Route  path="/Signup" element={user ? <Navigate to={"/Upload"} /> : <Signup /> } /> */}
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Upload" element={<Upload />} />
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
