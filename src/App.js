import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Upload from './Pages/Upload';
import ForgotPassword from './Pages/ForgotPassword';
import Layout from './Layout';
import ResultScreen from './Pages/Result';
import View from './Pages/View';
import { AuthProvider } from './Hooks/authContext';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/result" element={<ResultScreen />} />
        <Route path="/view" element={<View />} />

      </Route>
    )
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
