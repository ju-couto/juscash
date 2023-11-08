import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import { isUserAuthenticated } from "../Services/UserService";

const PrivateRoute = ({ children, redirectPath }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isSignedIn = isUserAuthenticated();

    if (!isSignedIn) {
      navigate(redirectPath);
    }
  }, [navigate, redirectPath]);

  return children;
};

const Routering = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={<PrivateRoute redirectPath="/login">{<Home />}</PrivateRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routering;
