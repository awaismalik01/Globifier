export const styles = (theme) => ({
  body: {
    width: "90%",
  },
  card: {
    padding: theme.spacing(1),
  },

  cardBox: {
    borderRadius: "0.5rem",
    height: "100%",
    backgroundColor: "#f8f9fa",
  },

  imgBox: {
    display: "block",
    height: "13rem",
  },

  img: {
    borderRadius: "0.5rem 0.5rem 0 0",

    width: "100%",
    height: "100%",
  },

  textBox: { padding: theme.spacing(1) },

  category: {
    color: "#909090",
    fontSize: "0.8rem",
    fontWeight: "500",
    textDecoration: "none",
    width: "fit-content",
  },

  title: {
    color: "#000",
    overflow: "hidden",
    fontWeight: "700",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    textDecoration: "none",
    width: "fit-content",
  },

  description: {
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
    color: "#909090",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textDecoration: "none",
    width: "fit-content",
  },

  author: {
    fontWeight: "600",
    textDecoration: "none",
    width: "fit-content",
  },

  statusBox: {
    display: "flex",
    paddingTop: theme.spacing(1),
  },

  iconBox: {
    display: "flex",
    mr: 1,
  },

  icon: {
    mr: "0.1rem",
  },

  categoryGrid: {
    padding: theme.spacing(1),
  },

  line: {
    border: "0.1rem solid",
  },

  categoryBox: {
    padding: theme.spacing(2),
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
