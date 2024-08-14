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
import Logout from "./Pages/dashboard/Logout/Logout";
import History from "./Pages/dashboard/history/history";
import Detection from "./Pages/Error Detection and solution/Detection";
import RootLayout from "./RootLayout";
import Workspace from "./Pages/dashboard/documents/workspace/Workspace";


function App() {
  const user = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={user ? <Navigate to="/upload" /> : <SignUp />}  />

        <Route element={<DashboardLayout />}>
          <Route path="upload" element={<Upload />} />
          <Route path="documents" element={<MyDocuments />} />
          <Route path="history" element={<History/>}/>
          <Route path="detection" element={<Detection/>}/>
        </Route>

        <Route path="documents/:workspace" element={<Workspace />} />

        <Route element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="logout" element={<Logout/>}/>
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
