import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginTop: "10px",
  },
  search: {
    marginLeft: theme.spacing(1),
  },
  button: {
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    color: "#ffffff",
    margin: theme.spacing(2),
  },
}));

export default useStyles;
