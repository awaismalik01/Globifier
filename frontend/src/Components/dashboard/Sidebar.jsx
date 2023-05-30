import React from "react";
import {
  Divider,
  Grid,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styles } from "./sidebarStyle";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const classes = styles(theme);

function Sidebar({ data }) {
  return (
    <>
      <Grid item={true} xs={12} sm={12} sx={classes.categoryGrid}>
        <Typography>Popular Post</Typography>
        <Divider sx={classes.line} />

        <Grid
          container
          direction={"column"}
          spacing={2}
          sx={classes.categoryBox}
        >
          {!!data?.length &&
            data?.map((value, index) => (
              <Grid
                key={index}
                item={true}
                container
                spacing={2}
                direction={"row"}
              >
                <Grid
                  item={true}
                  component={RouterLink}
                  to={`/post/${value?._id}`}
                >
                  <img
                    src={`${process.env.REACT_APP_FIREBASE_URL}${value?.image}?alt=media`}
                    alt={"pic"}
                    style={{ width: "4.5rem", height: "4.5rem" }}
                  />
                </Grid>
                <Grid item={true}>
                  <Typography
                    sx={{ textDecoration: "none" }}
                    component={RouterLink}
                    to={`/post/${value?._id}`}
                  >
                    {value?.title}
                  </Typography>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Sidebar;
