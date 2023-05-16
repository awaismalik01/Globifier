import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { DropzoneArea } from "material-ui-dropzone";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  CreatePostAction,
  ResetCreatePost,
} from "../../redux/actions/CreatePostAction";

// import img from "../../assets/images/img.jpg";

function CreatePost() {
  const { loginData, isLoading, data, error } = useSelector((state) => ({
    loginData: state?.LoginReducer?.data,
    isLoading: state?.CreatePostReducer?.isLoading,
    data: state?.CreatePostReducer?.data,
    error: state?.CreatePostReducer?.error,
  }));

  const [toaster, setToaster] = useState({ state: false, message: "" });
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(ResetCreatePost());
  }, [dispatch]);

  useEffect(() => {
    if (!loginData) {
      navigate("/");
    }
  }, [loginData, navigate]);

  useEffect(() => {
    if (!!data) {
      navigate("/");
    }
  }, [data, navigate]);

  useEffect(() => {
    if (!!error?.length) {
      setToaster({ state: true, message: error });
      setTimeout(() => {
        dispatch(ResetCreatePost());
      }, 1000);
    }
  }, [dispatch, error]);

  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    console.log(markup);
  };

  const handleSubmit = () => {
    let formDataBody = new FormData();

    formDataBody.append("title", formData?.title);
    formDataBody.append("category", formData?.category);
    formDataBody.append("author", loginData?.name);
    formDataBody.append("email", loginData?.email);
    formDataBody.append("image", formData?.image);
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    formDataBody.append("content", markup);

    dispatch(CreatePostAction(formDataBody));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "1rem",
      }}
    >
      <Box
        sx={{
          marginTop: "2rem",
          width: { md: "60%", xs: "90%" },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "700" }}>
          Create New Post
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: "2rem",
          alignItems: "center",
          width: { md: "60%", xs: "90%" },
        }}
      >
        <TextField
          label="Post Title"
          sx={{ width: "100%" }}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
          size="small"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: "1rem",
          alignItems: "center",
          width: { md: "60%", xs: "90%" },
        }}
      >
        <TextField
          label="Post Category"
          sx={{ width: "100%" }}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, category: e.target.value }))
          }
          size="small"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: "2rem",
          alignItems: "center",
          width: { md: "60%", xs: "90%" },
        }}
      >
        <DropzoneArea
          acceptedFiles={["image/*"]}
          filesLimit={1}
          dropzoneText={"Drag and drop an image here or click"}
          onChange={(files) =>
            setFormData((prev) => ({ ...prev, image: files?.[0] }))
          }
        />
      </Box>

      <Box
        sx={{
          marginTop: "8vh",
          cursor: "text",
          width: { md: "60%", xs: "90%" },
          // minHeight: "50vh",
          padding: "0.3rem",
          border: "1px solid black",
        }}
      >
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "list",
              "textAlign",
              "colorPicker",
              "link",
              "emoji",
              "remove",
              "history",
            ],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: "2rem",
          justifyContent: "flex-end",
          alignItems: "center",
          width: { md: "60%", xs: "90%" },
        }}
      >
        <Button
          variant="outlined"
          sx={{ width: { md: "13%", xs: "50%" }, mr: 2 }}
          size="large"
          LinkComponent={Link}
          to={"/"}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          sx={{ width: { md: "13%", xs: "50%" } }}
          size="large"
          onClick={handleSubmit}
        >
          Post
        </Button>
      </Box>

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
    </Box>
  );
}

export default CreatePost;
