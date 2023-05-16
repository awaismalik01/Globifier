import {
  Box,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
  Backdrop,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Fab,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetPostAction, ResetGetPost } from "../../redux/actions/GetPostAction";
import PostAddIcon from "@mui/icons-material/PostAdd";

import { styles } from "./postStyle.js";
import Sidebar from "./Sidebar";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const classes = styles(theme);

const fabStyle = {
  position: "fixed",
  bottom: 20,
  right: 20,
};

function Post() {
  let { id } = useParams();

  const { isLoading, data, error, loginData } = useSelector((state) => ({
    isLoading: state?.GetPostReducer?.isLoading,
    data: state?.GetPostReducer?.data,
    error: state?.GetPostReducer?.error,
    loginData: state?.LoginReducer?.data,
  }));

  const [open, setOpen] = useState(false);
  const [toaster, setToaster] = useState({ state: false, message: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!!error?.length) {
      setToaster({ state: true, message: error });
      setTimeout(() => {
        dispatch(ResetGetPost());
      }, 1000);
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (!!id) dispatch(GetPostAction(id));
  }, [dispatch, id]);

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
          {!isLoading && (
            <Grid container spacing={4} sx={classes.body}>
              <Grid container item={true} sm={12} md={9}>
                <Box sx={classes.post}>
                  <Typography variant="h3">{data?.title}</Typography>
                  <Typography variant="h6">{data?.category}</Typography>
                  <Box sx={classes.postDate}>
                    <Typography variant="subtitle1">
                      Posted on{" "}
                      {!!data ? new Date(data?.createdAt).toDateString() : ""}{" "}
                      by <strong> {data?.author}</strong>
                    </Typography>
                  </Box>

                  <Box sx={classes.postImgBox}>
                    <img
                      src={
                        !!data && !!data?.image
                          ? window.URL.createObjectURL(
                              new Blob(
                                [Int8Array.from(data?.image?.data?.data)],
                                {
                                  type: data?.image?.contentType,
                                }
                              )
                            )
                          : ""
                      }
                      alt={"pic"}
                      style={classes.postImg}
                    />
                  </Box>

                  <div dangerouslySetInnerHTML={{ __html: data?.content }} />

                  {/* <Box sx={classes.postContent}>
                    <ul>
                      <li>
                        <strong>Main topics: </strong>Apple products
                      </li>
                      <li>
                        <strong>Created on: </strong>WordPress
                      </li>
                    </ul>
                    <p>
                      Part of the Apple user community, 9to5Mac is a blog
                      covering news and reviews of Apple products.
                    </p>
                    <p>
                      The website was originally created as a hobby blog
                      covering news on Macs. Since then, 9to5Mac has become a
                      blog covering all Apple products and is now part of the
                      9to5 blog network, which includes other sites such as{" "}
                      <strong>9to5Google</strong> and <strong>9to5Toys</strong>.
                    </p>
                    <p>
                      <strong>What Can We Learn From This Blog</strong>
                    </p>
                    <p>
                      The blog’s homepage features a colorful and eye-catching
                      collage of pictures and headlines right below the
                      navigation bar. When a cursor hovers over images, they
                      slightly enlarge, enticing people to click.
                    </p>
                    <p>
                      In addition, the blog also uses the infinite scrolling
                      feature so readers can explore more pages of the website
                      simply by continuing to scroll down.
                    </p>
                  </Box> */}
                </Box>
              </Grid>

              <Grid
                container
                alignContent={"flex-start"}
                item={true}
                sm={12}
                md={3}
              >
                <Sidebar />
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

export default Post;
