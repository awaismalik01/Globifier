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
  Fab,
  Backdrop,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import PostAddIcon from "@mui/icons-material/PostAdd";

import { styles } from "./dashboardStyle.js";
import Sidebar from "./Sidebar";
import {
  GetPostsAction,
  ResetGetPosts,
} from "../../redux/actions/GetPostsAction";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const classes = styles(theme);

const fabStyle = {
  position: "fixed",
  bottom: 20,
  right: 20,
};

function Card({ value }) {
  return (
    <Box sx={classes.cardBox}>
      <Box
        component={RouterLink}
        to={`/post/${value?._id}`}
        style={classes.imgBox}
      >
        <img
          src={`${process.env.REACT_APP_FIREBASE_URL}${value?.image}?alt=media`}
          alt={"pic"}
          style={classes.img}
        />
      </Box>
      <Grid container direction={"column"} sx={classes.textBox}>
        <Typography
          component={RouterLink}
          to={`/post/${value?._id}`}
          sx={classes.category}
        >
          {value?.category}
        </Typography>
        <Typography
          component={RouterLink}
          to={`/post/${value?._id}`}
          variant="h5"
          sx={classes.title}
        >
          {value?.title}
        </Typography>
        <Typography
          component={RouterLink}
          to={`/post/${value?._id}`}
          sx={classes.author}
        >
          {value?.author}
        </Typography>
        <Divider />
        <Box sx={classes.statusBox}>
          <Box sx={classes.iconBox}>
            <VisibilityIcon sx={classes.icon} />
            <Typography variant="subtitle1">{value?.views}</Typography>
          </Box>
          <Box sx={classes.iconBox}>
            <ChatBubbleOutlineIcon sx={classes.icon} />
            <Typography variant="subtitle1">{value?.comments}</Typography>
          </Box>
          <Box sx={classes.iconBox}>
            <FavoriteBorderIcon sx={classes.icon} />
            <Typography variant="subtitle1">{value?.likes}</Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

function Dashboard() {
  const { isLoading, data, error, loginData } = useSelector((state) => ({
    isLoading: state?.GetPostsReducer?.isLoading,
    data: state?.GetPostsReducer?.data,
    error: state?.GetPostsReducer?.error,
    loginData: state?.LoginReducer?.data,
  }));

  const [open, setOpen] = useState(false);
  const [toaster, setToaster] = useState({ state: false, message: "" });
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetPostsAction({ pageNumber: page, limit: 9 }));
  }, [dispatch, page]);

  useEffect(() => {
    if (!!error?.length) {
      setToaster({ state: true, message: error });
      setTimeout(() => {
        dispatch(ResetGetPosts());
      }, 1000);
    }
  }, [dispatch, error]);

  const postHandle = () => {
    if (!!loginData) {
      navigate("/post/create");
    } else {
      setOpen(true);
    }
  };


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
          {!isLoading && !!data && (
            <Grid container spacing={4} sx={classes.body}>
              <Grid container item={true} sm={12} md={9}>
                {!!data?.data?.length &&
                  data?.data?.map((value, index) => {
                    return (
                      <Grid
                        key={index}
                        item={true}
                        xs={12}
                        sm={6}
                        md={4}
                        sx={classes.card}
                      >
                        <Card value={value} />
                      </Grid>
                    );
                  })}

                {!!data && (
                  <Grid
                    item={true}
                    container
                    justifyContent={{ xs: "center", md: "flex-end" }}
                    alignItems={"center"}
                    md={12}
                    sx={classes.card}
                  >
                    <ArrowBackIosNewIcon
                      sx={[
                        classes.arrow,
                        page === 0 ? classes.disabledArrow : {},
                      ]}
                      onClick={() => {
                        if (!(page === 0)) setPage(page - 1);
                      }}
                    />

                    {[...Array(data?.totalPage).keys()]?.map((value, index) => (
                      <Box
                        key={index}
                        sx={[
                          classes.page,
                          index === page ? classes.activePage : {},
                        ]}
                        onClick={() => setPage(index)}
                      >
                        {value + 1}
                      </Box>
                    ))}

                    <ArrowForwardIosIcon
                      sx={[
                        classes.arrow,
                        page === data?.totalPage - 1
                          ? classes.disabledArrow
                          : {},
                      ]}
                      onClick={() => {
                        if (!(page === data?.totalPage - 1)) setPage(page + 1);
                      }}
                    />
                  </Grid>
                )}
              </Grid>

              <Grid
                container
                alignContent={"flex-start"}
                item={true}
                sm={12}
                md={3}
              >
                <Sidebar data={data?.popularPost} />
              </Grid>
            </Grid>
          )}
        </Box>

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>
            Ready to share your thoughts? Start posting now!
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              You must login or Register to post a blog.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              onClick={() => {
                setOpen(false);
                navigate("/login");
              }}
            >
              Login
            </Button>
          </DialogActions>
        </Dialog>

        <Fab
          color="primary"
          onClick={postHandle}
          sx={fabStyle}
          aria-label="add"
        >
          <PostAddIcon />
        </Fab>

        <Snackbar
          open={toaster?.state}
          autoHideDuration={5000}
          onClose={() => setToaster({ state: false, message: "" })}
        >
          <Alert
            variant="filled"
            onClose={() => setToaster({ state: false, message: "" })}
            severity="error"
            sx={{ width: "100%" }}
          >
            {toaster?.message}
          </Alert>
        </Snackbar>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
    </ThemeProvider>
  );
}

export default Dashboard;
