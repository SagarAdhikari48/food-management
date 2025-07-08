import { Navigate, Route, Routes } from "react-router-dom";
//import index css
import "./index.css";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage></HomePage>
          </Layout>
        }
      />
      <Route path="/user-profile" element={<span>User Profile Page</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
