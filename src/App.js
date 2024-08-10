import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from "./Pages/dashboard/DashboardLayout";
import { AuthProvider, useAuth } from "./Hooks/authContext";

import Upload from "./Pages/dashboard/home/Upload";
import ForgotPassword from "./Pages/athentication/ForgotPassword";
import SignIn from "./Pages/athentication/Signin";
import SignUp from "./Pages/athentication/Signup";
import AuthLayout from "./Pages/athentication/AuthLayout";
import MyDocuments from "./Pages/dashboard/documents/MyDocument";


function App() {
  const user = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={user ? <Navigate to="/upload" /> : <SignUp />}  />
        <Route path="upload" element={<Upload />} />
        <Route path="documents" element={<MyDocuments />} />

        <Route element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
      </Route>
    ),
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
