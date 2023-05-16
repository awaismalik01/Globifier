import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Modules/Body/Layout";
import SignUp from "../Components/signUp/SignUp";
import SignIn from "../Components/signIn/SignIn";
import Dashboard from "../Components/dashboard/Dashboard";
import Post from "../Components/dashboard/Post";
import CreatePost from "../Components/dashboard/CreatePost";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/register"} element={<SignUp />} />
        <Route path={"/login"} element={<SignIn />} />
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path={"/post/:id"} element={<Post />} />
          <Route path={"/post/create"} element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
