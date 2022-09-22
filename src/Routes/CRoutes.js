import React from "react";
import Homepage from "../Pages/Homepage/Homepage";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
import Watch from "../Pages/watch/Watch";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function CRoutes() {
  
  const loged = useSelector((state) => {
    return state.logedReducer.loged;
  });
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={loged ? <Homepage /> : <Register />} />

      <Route path="/watch" element={<Watch />} />
      <Route
        path="*"
        element={<h1>ERROR 404 Page Does not Exist You are in Wrong URL </h1>}
      />
    </Routes>
  );
}
export default CRoutes;
