import "./NavBar.css";
import CloseIcon from "@mui/icons-material/Close";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  helpIcon: {
    fontSize: "large",
  },
}));
export function NavBar(props) {
  const classes = useStyles();
  const { title, handleHelp } = props;

  const handleClose = () => {
    window.open("about:blank", "_self");
    window.close();
  };

  return (
    <>
      <div class="mainContent-nav">
        <div></div>
        <div class="nav-middle">
          <div class="navbar-title">{title}</div>
        </div>

        <div class="navbar-leftcontent">
          <button onClick={(e) => handleHelp()}>
            <QuestionMarkIcon fontSize="large" />
          </button>
          <button onClick={(e) => handleClose()}>
            <CloseIcon fontSize="large" />{" "}
          </button>
        </div>
      </div>
    </>
  );
}
