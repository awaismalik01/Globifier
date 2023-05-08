import {
  Box,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
  Divider,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import img from "../../assets/images/img.jpg";
import { styles } from "./dashboardStyle.js";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const classes = styles(theme);

function Dashboard() {
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
              <Grid item={true} xs={12} sm={6} md={4} sx={classes.card}>
                <Box sx={classes.cardBox}>
                  <Box component={RouterLink} style={classes.imgBox}>
                    <img src={img} alt={"pic"} style={classes.img} />
                  </Box>
                  <Grid container direction={"column"} sx={classes.textBox}>
                    <Typography component={RouterLink} sx={classes.category}>
                      Category
                    </Typography>
                    <Typography
                      component={RouterLink}
                      variant="h5"
                      sx={classes.title}
                    >
                      Title
                    </Typography>
                    <Typography component={RouterLink} sx={classes.description}>
                      Description
                    </Typography>
                    <Typography component={RouterLink} sx={classes.author}>
                      Author
                    </Typography>
                    <Divider />
                    <Box sx={classes.statusBox}>
                      <Box sx={classes.iconBox}>
                        <VisibilityIcon sx={classes.icon} />
                        <Typography variant="subtitle1">10</Typography>
                      </Box>
                      <Box sx={classes.iconBox}>
                        <ChatBubbleOutlineIcon sx={classes.icon} />
                        <Typography variant="subtitle1">0</Typography>
                      </Box>
                      <Box sx={classes.iconBox}>
                        <FavoriteBorderIcon sx={classes.icon} />
                        <Typography variant="subtitle1">30</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  
                </Box>
              </Grid>

              <Grid item={true} xs={12} sm={6} md={4} sx={classes.card}>
                <Box sx={classes.cardBox}>
                  <Box component={RouterLink} style={classes.imgBox}>
                    <img src={img} alt={"pic"} style={classes.img} />
                  </Box>
                  <Grid container direction={"column"} sx={classes.textBox}>
                    <Typography component={RouterLink} sx={classes.category}>
                      Category
                    </Typography>
                    <Typography
                      component={RouterLink}
                      variant="h5"
                      sx={classes.title}
                    >
                      Title
                    </Typography>
                    <Typography component={RouterLink} sx={classes.description}>
                      Description
                    </Typography>
                    <Typography component={RouterLink} sx={classes.author}>
                      Author
                    </Typography>
                    <Divider />
                    <Box sx={classes.statusBox}>
                      <Box sx={classes.iconBox}>
                        <VisibilityIcon sx={classes.icon} />
                        <Typography variant="subtitle1">10</Typography>
                      </Box>
                      <Box sx={classes.iconBox}>
                        <ChatBubbleOutlineIcon sx={classes.icon} />
                        <Typography variant="subtitle1">0</Typography>
                      </Box>
                      <Box sx={classes.iconBox}>
                        <FavoriteBorderIcon sx={classes.icon} />
                        <Typography variant="subtitle1">30</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  
                </Box>
              </Grid>

              <Grid item={true} xs={12} sm={6} md={4} sx={classes.card}>
                <Box sx={classes.cardBox}>
                  <Box component={RouterLink} style={classes.imgBox}>
                    <img src={img} alt={"pic"} style={classes.img} />
                  </Box>
                  <Grid container direction={"column"} sx={classes.textBox}>
                    <Typography component={RouterLink} sx={classes.category}>
                      Category
                    </Typography>
                    <Typography
                      component={RouterLink}
                      variant="h5"
                      sx={classes.title}
                    >
                      Title
                    </Typography>
                    <Typography component={RouterLink} sx={classes.description}>
                      Description
                    </Typography>
                    <Typography component={RouterLink} sx={classes.author}>
                      Author
                    </Typography>
                    <Divider />
                    <Box sx={classes.statusBox}>
                      <Box sx={classes.iconBox}>
                        <VisibilityIcon sx={classes.icon} />
                        <Typography variant="subtitle1">10</Typography>
                      </Box>
                      <Box sx={classes.iconBox}>
                        <ChatBubbleOutlineIcon sx={classes.icon} />
                        <Typography variant="subtitle1">0</Typography>
                      </Box>
                      <Box sx={classes.iconBox}>
                        <FavoriteBorderIcon sx={classes.icon} />
                        <Typography variant="subtitle1">30</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  
                </Box>
              </Grid>


              <Grid
                item={true}
                container
                justifyContent={{ xs: "center", md: "flex-end" }}
                alignItems={"center"}
                md={12}
                sx={classes.card}
              >
                <ArrowBackIosNewIcon />
                <Box sx={[classes.page, true ? classes.activePage : {}]}>1</Box>
                <Box sx={[classes.page, false ? classes.activePage : {}]}>
                  2
                </Box>
                <ArrowForwardIosIcon />
              </Grid>
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

export default Dashboard;
