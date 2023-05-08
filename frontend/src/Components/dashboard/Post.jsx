import {
  Box,
  Container,
  CssBaseline,
  Paper,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
  styled,
  Divider,
  Link,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import img from "../../assets/images/img.jpg";
import { styles } from "./postStyle.js";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const classes = styles(theme);

function Post() {
  return (
    <ThemeProvider theme={theme}>
      <Container component={"main"} maxWidth={"xl"}>
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            mt: 10,
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={4} sx={classes.body}>
            <Grid container item={true} sm={12} md={9}>
              <Box sx={classes.post}>
                <Typography variant="h3">Post Title</Typography>
                <Box sx={classes.postDate}>
                  <Typography variant="subtitle1">
                    Posted on Saturday, 4 April 2015 by Admin
                  </Typography>
                </Box>

                <Box sx={classes.postImgBox}>
                  <img src={img} alt={"pic"} style={classes.postImg} />
                </Box>

                <Box sx={classes.postContent}>
                  <ul>
                    <li>
                      <strong>Main topics: </strong>Apple products
                    </li>
                    <li>
                      <strong>Created on: </strong>WordPress
                    </li>
                  </ul>
                  <p>
                    Part of the Apple user community, 9to5Mac is a blog covering
                    news and reviews of Apple products.
                  </p>
                  <p>
                    The website was originally created as a hobby blog covering
                    news on Macs. Since then, 9to5Mac has become a blog covering
                    all Apple products and is now part of the 9to5 blog network,
                    which includes other sites such as{" "}
                    <strong>9to5Google</strong> and <strong>9to5Toys</strong>.
                  </p>
                  <p>
                    <strong>What Can We Learn From This Blog</strong>
                  </p>
                  <p>
                    The blog’s homepage features a colorful and eye-catching
                    collage of pictures and headlines right below the navigation
                    bar. When a cursor hovers over images, they slightly
                    enlarge, enticing people to click.
                  </p>
                  <p>
                    In addition, the blog also uses the infinite scrolling
                    feature so readers can explore more pages of the website
                    simply by continuing to scroll down.
                  </p>
                </Box>
              </Box>
            </Grid>

            <Grid
              container
              alignContent={"flex-start"}
              item={true}
              sm={12}
              md={3}
            >
              <Grid item={true} xs={12} sm={12} sx={classes.categoryGrid}>
                <Typography>Category</Typography>
                <Divider sx={classes.line} />

                <Grid container sx={classes.categoryBox}>
                  <Grid
                    item={true}
                    component={RouterLink}
                    sx={classes.categoryList}
                  >
                    Catey 1
                  </Grid>

                  <Grid item={true} sx={classes.categoryList}>
                    Categoy 2
                  </Grid>

                  <Grid item={true} sx={classes.categoryList}>
                    Category 3
                  </Grid>
                  <Grid item={true} sx={classes.categoryList}>
                    Cay 5
                  </Grid>
                </Grid>
              </Grid>

              <Grid item={true} xs={12} sm={12} sx={classes.categoryGrid}>
                <Typography>Popular Post</Typography>
                <Divider sx={classes.line} />

                <Grid
                  container
                  direction={"column"}
                  spacing={1}
                  sx={classes.categoryBox}
                >
                  <Grid item={true} container spacing={2} direction={"row"}>
                    <Grid item={true}>
                      <img src={img} alt={"pic"} style={{ width: "5rem" }} />
                    </Grid>
                    <Grid item={true}>
                      <Typography>Title</Typography>
                    </Grid>
                  </Grid>
                  <Divider />

                  <Grid item={true} container spacing={2} direction={"row"}>
                    <Grid item={true}>
                      <img src={img} alt={"pic"} style={{ width: "5rem" }} />
                    </Grid>
                    <Grid item={true}>
                      <Typography>Title</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Post;
