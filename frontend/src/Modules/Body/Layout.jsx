import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
import maintanence from "../../assets/images/maintanence.jpg";

function Layout() {
  const fabStyle = {
    position: "fixed",
    bottom: 20,
    right: 20,
  };

  return (
    <>
      {!!process.env.REACT_APP_MAINTANENCE ? (
        <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center" }}>
          <img src={maintanence} style={{ width: "45%" }} alt="maintanence" />
        </div>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Fab
            color="primary"
            LinkComponent={Link}
            to={"/post/create"}
            sx={fabStyle}
            aria-label="add"
          >
            <PostAddIcon />
          </Fab>
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;
