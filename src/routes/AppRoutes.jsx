import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../components/pages/Home";
import Bookstore from "../components/pages/Bookstore";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="bookstore" element={<Bookstore />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}
