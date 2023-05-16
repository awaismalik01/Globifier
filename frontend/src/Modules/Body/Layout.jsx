import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import maintanence from "../../assets/images/maintanence.jpg";
import { useDispatch } from "react-redux";
import { ResetLogin } from "../../redux/actions/LoginAction";

function Layout() {
  const location = useLocation();
  const dispatch = useDispatch();

  const parseJwt = (token) => {
    const atob = (base64) => Buffer.from(base64, "base64").toString("binary");

    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      const decodedJwt = parseJwt(user);
      if (decodedJwt.exp * 1000 < Date.now()) {
        dispatch(ResetLogin());
        console.log("Session Expired");
      }
    }
  }, [dispatch, location]);

  return (
    <>
      {!!process.env.REACT_APP_MAINTANENCE ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={maintanence} style={{ width: "45%" }} alt="maintanence" />
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <Outlet />
          <Footer />
        </Box>
      )}
    </>
  );
}

export default Layout;
