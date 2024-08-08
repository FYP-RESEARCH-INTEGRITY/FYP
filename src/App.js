import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Upload from "./Pages/Upload";
import ForgotPassword from "./Pages/ForgotPassword";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from "react-router-dom";
import Layout from "./Layout";
import {
  AuthProvider,
  useAuth
} from "./Hooks/authContext";






function App() {
  const user = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={user ? <Navigate to={"/Upload"} /> : <Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Route>,
    )
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
