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
  Avatar,
  Divider,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetPostAction, ResetGetPost } from "../../redux/actions/GetPostAction";
import PostAddIcon from "@mui/icons-material/PostAdd";

import { styles } from "./postStyle.js";
import Sidebar from "./Sidebar";
import {
  CreateCommentAction,
  ResetCreateComment,
} from "../../redux/actions/CreateCommentAction";

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

  const {
    isLoading,
    data,
    error,
    loginData,
    commentLoader,
    commentData,
    commentError,
  } = useSelector((state) => ({
    isLoading: state?.GetPostReducer?.isLoading,
    data: state?.GetPostReducer?.data,
    error: state?.GetPostReducer?.error,
    loginData: state?.LoginReducer?.data,
    commentLoader: state?.CreateCommentReducer?.isLoading,
    commentData: state?.CreateCommentReducer?.data,
    commentError: state?.CreateCommentReducer?.error,
  }));

  const [open, setOpen] = useState(false);
  const [toaster, setToaster] = useState({ state: false, message: "" });
  const [commentForm, setCommentForm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(ResetCreateComment());
  }, [dispatch]);

  useEffect(() => {
    if (!!error?.length || !!commentError?.length) {
      setToaster({ state: true, message: error || commentError });
      setTimeout(() => {
        dispatch(ResetGetPost());
        dispatch(ResetCreateComment());
      }, 1000);
    }
  }, [dispatch, error, commentError]);

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

  useEffect(() => {
    if (!!commentData) {
      dispatch(GetPostAction(id));
      dispatch(ResetCreateComment());
    }
  }, [commentData, dispatch, id]);

  const commentHandle = () => {
    if (loginData) {
      const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      dispatch(
        CreateCommentAction(id, {
          email: loginData?.email,
          name: loginData?.name,
          comment: commentForm,
          date: new Date().toLocaleDateString(undefined, options),
        })
      );
      setCommentForm("");
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
            <Grid container spacing={2} sx={classes.body}>
              <Grid container item={true} sm={12} md={9}>
                <Box sx={classes.post}>
                  <Typography variant="h3">{data?.data?.title}</Typography>
                  <Typography variant="h6">{data?.data?.category}</Typography>
                  <Box sx={classes.postDate}>
                    <Typography variant="subtitle1">
                      Posted on{" "}
                      {!!data
                        ? new Date(data?.data?.createdAt).toDateString()
                        : ""}{" "}
                      by <strong> {data?.data?.author}</strong>
                    </Typography>
                  </Box>

                  <Box sx={classes.postImgBox}>
                    <img
                      src={`${process.env.REACT_APP_FIREBASE_URL}${data?.data?.image}?alt=media`}
                      alt={"pic"}
                      style={classes.postImg}
                    />
                  </Box>

                  <div
                    dangerouslySetInnerHTML={{ __html: data?.data?.content }}
                  />
                </Box>

                <Divider
                  sx={{
                    width: "100%",
                    mt: 6,
                    mb: 2,
                    border: "1px solid #c2c6cc",
                  }}
                />

                <Box sx={{ mt: 4, mb: 4, width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      width: "100%",
                    }}
                  >
                    <Avatar alt="Remy Sharp" src="/" />
                    <Box sx={{ width: "95%", position: "relative" }}>
                      <textarea
                        style={{
                          width: "100%",
                          height: "200px",
                          padding: "1rem",
                          fontSize: "1rem",
                          border: "2px solid black",
                          borderRadius: "1rem",
                          resize: "none",
                        }}
                        value={commentForm}
                        onChange={(e) => setCommentForm(e.target.value)}
                        placeholder="Join the discussion..."
                        disabled={!loginData}
                      />
                      <Button
                        variant="contained"
                        sx={{
                          position: "absolute",
                          bottom: "7%",
                          right: "1%",
                          borderRadius: "1rem",
                        }}
                        onClick={() => commentHandle()}
                        disabled={
                          (commentLoader || !commentForm?.length) && loginData
                        }
                      >
                        {!!loginData ? "Comment" : "Login"}
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      mt: 2,
                    }}
                  >
                    <Box sx={classes.iconBox}>
                      {false ? (
                        <FavoriteIcon
                          sx={[classes.icon, { color: "#288ce4" }]}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          className={"icon"}
                          sx={classes.icon}
                        />
                      )}
                      <Typography variant="subtitle1">{0}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Typography sx={{ mr: 1 }}>Oldest</Typography>
                      <Typography>Newest</Typography>
                    </Box>
                  </Box>

                  {!!data?.data?.comments?.length ? (
                    data?.data?.comments?.map((value, index) => (
                      <Box
                        key={index}
                        sx={{
                          mt: 3,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          width: "100%",
                        }}
                      >
                        <Avatar alt={value?.name} src="/" />
                        <Box sx={{ width: "95%" }}>
                          <Typography variant="h6">{value?.name}</Typography>
                          <Typography variant="caption">
                            {value?.date}
                          </Typography>
                          <Typography>{value?.comment}</Typography>
                        </Box>
                      </Box>
                    ))
                  ) : (
                    <Box
                      sx={{
                        mt: 3,
                        p: 2,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "Center",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography>Be the first to comment.</Typography>
                    </Box>
                  )}
                  <Divider
                    sx={{
                      width: "100%",
                      mt: 6,
                      border: "1px solid #c2c6cc",
                    }}
                  />
                </Box>
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
          open={isLoading || commentLoader}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
    </ThemeProvider>
  );
}

export default Post;
