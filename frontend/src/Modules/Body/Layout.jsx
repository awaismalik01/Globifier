import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";

function Layout() {
  const fabStyle = {
    position: "fixed",
    bottom: 20,
    right: 20,
  };

  return (
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
  );
}

export default Layout;
