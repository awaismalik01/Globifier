import React, { useEffect, useRef, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import { DropzoneArea } from "material-ui-dropzone";
import { Link } from "react-router-dom";

// import img from "../../assets/images/img.jpg";

function CreatePost() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const [text, setText] = useState();

  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    console.log(markup);
  };

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  return (
    <Box
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
        <TextField label="Post Title" sx={{ width: "100%" }} size="small" />
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
          onChange={(files) => console.log("Files:", files)}
        />
      </Box>

      <Box
        sx={{
          marginTop: "8vh",
          cursor: "text",
          width: { md: "60%", xs: "90%" },
          minHeight: "50vh",
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
          onClick={() => alert("Posted")}
        >
          Post
        </Button>
      </Box>
    </Box>
  );
}

export default CreatePost;
