import React from "react";
import { Link as RouteLink } from "react-router-dom";
import Container from "@mui/material/Container";
import { withStyles, makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LoginNavbar from "../../Login/LoginNavbar";

const useStyles = makeStyles(theme => ({
  home: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  categories: {
    width: "200px",
    textAlign: "center",
    marginTop: "50px"
  },
  link: {
    color: "#fff",
    width: "100%",
    padding: "6px",
    "&:hover": {
      textDecoration: "none"
    }
  }
}));

const ButtonHome = withStyles(theme => ({
  root: {
    width: "150px",
    backgroundColor: "#000",
    border: "2px solid #d2a600",
    margin: "20px",
    padding: "0",
    "&:hover": {
      backgroundColor: "#444444"
    },
  }
}))(Button);

function logout(){
  window.localStorage.removeItem("token");
  window.location.reload();
  return false
}

function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.home}>
      <LoginNavbar/>
      <br/>
      <br/>
      <br/>
      <Link
        component="button"
        variant="body2"
        onClick={logout}>
        Logout
      </Link>        
      <Container className={classes.categories}>
        <ButtonHome variant="outlined">
          <Link to="/films" component={RouteLink} className={classes.link}>
            Films
          </Link>
        </ButtonHome>
        <br/>
        <br/>
        <ButtonHome variant="outlined">
          <Link to="/people" component={RouteLink} className={classes.link}>
            People
          </Link>
        </ButtonHome>
      </Container>
    </Container>
  );
}

export default Home;
