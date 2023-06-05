export const styles = (theme) => ({
  body: {
    width: "90%",
    backgroundColor: "whitesmoke",
  },

  post: {
    padding: theme.spacing(2),
    border: "2px solid black",
    width: "100%",
  },

  postDate: {
    mt: 1,
    border: "1px solid",
    padding: theme.spacing(1),
  },

  postImgBox: {
    mt: 4,
    height: "30rem",
  },

  postImg: { width: "100%", height: "100%" },

  postContent: {},

  categoryGrid: {
    // padding: theme.spacing(1),
  },

  line: {
    border: "0.1rem solid",
  },

  iconBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "8%",
    height: "2rem",
    cursor: "pointer",

    "&:hover": {
      border: "2px solid #288ce4",
      borderRadius: "1rem",
      "& .icon": {
        color: "#288ce4",
      },
    },
  },

  icon: {
    mr: 1,
  },

  categoryBox: {
    padding: theme.spacing(1),
  },

  categoryList: {
    backgroundColor: "#1976d2",
    padding: theme.spacing(1),
    borderRadius: "0.2rem",
    margin: "0.1rem",
    textDecoration: "none",
    color: "white",
  },

  page: {
    backgroundColor: "grey",
    padding: "0.2rem 0.5rem",
    borderRadius: "0.2rem",
    margin: "0.2rem",
    textDecoration: "none",
    color: "white",
  },

  activePage: {
    backgroundColor: "#1976d2",
  },
});
