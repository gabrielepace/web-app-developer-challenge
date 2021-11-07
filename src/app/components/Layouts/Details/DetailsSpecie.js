import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSpecie } from "../../../globalStore/thunks/thunkSpecie";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import ListItem from "@mui/material/ListItem";
import { makeStyles } from "@mui/styles";
import Loading from "../../Loading/Loading";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Menu from "../Menu/Menu";

const useStyles = makeStyles(theme => ({
  detailSpecie: {
    margin: 0,
    padding: 0,
    maxWidth: "100%"
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "0"
  },
  specieList: {
    margin: "16px",
    padding: "8px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "400px",
      margin: "16px auto"
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "850px"
    }
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 700
  },
  itemsList: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  listItem: {
    padding: "8px 0",
    [theme.breakpoints.up("md")]: {
      width: "32%",
      margin: "0 5px"
    }
  },
  item: {
    margin: "16px 0"
  },
  itemText: {
    fontSize: "1rem",
    fontWeight: "700"
  },
  detailText: {
    fontSize: "1rem",
    marginLeft: "8px"
  },
  openingText: {
    fontSize: "1rem",
    lineHeight: "1.75rem"
  },
  link: {
    width: "100%",
    color: "#000",
    padding: "12px",
    fontSize: "1rem",
    backgroundColor: "#e0e0e0",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#ccc"
    }
  }
}));

const DetailsSpecie = ({ match, history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { id } = match.params;

  React.useEffect(() => {
    dispatch(getSpecie(id));
  }, [dispatch, id]);

  const prevPage = () => {
    history.go(-1);
  };

  const upperCase = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const isLoading = useSelector(state => state.isLoading);
  const specie = useSelector(state => state.specie);
  const nameMovies = useSelector(state => state.nameMovies);
  const nameHomeWorld = useSelector(state => state.nameHomeWorld);
  const nameCharacters = useSelector(state => state.nameCharacters);

  const name = specie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Name: </span>
      <span className={classes.detailText}>{specie.name}</span>
    </Container>
  );

  const classification = specie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Classification: </span>
      <span className={classes.detailText}>
        {upperCase(specie.classification)}
      </span>
    </Container>
  );

  const designation = specie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Designation: </span>
      <span className={classes.detailText}>
        {upperCase(specie.designation)}
      </span>
    </Container>
  );

  const averageHeight = specie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Average Height: </span>
      <span className={classes.detailText}>{specie.average_height} cm</span>
    </Container>
  );

  const averageLifespan = specie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Average Lifespan: </span>
      <span className={classes.detailText}>
        {specie.average_lifespan} years
      </span>
    </Container>
  );

  const eyeColors = specie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Eye Colors: </span>
      <span className={classes.detailText}>{upperCase(specie.eye_colors)}</span>
    </Container>
  );

  const hairColors = specie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Hair Colors: </span>
      <span className={classes.detailText}>
        {upperCase(specie.hair_colors)}
      </span>
    </Container>
  );

  const skinColors = specie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Skin Colors: </span>
      <span className={classes.detailText}>
        {upperCase(specie.skin_colors)}
      </span>
    </Container>
  );

  const language = specie && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Language: </span>
      <span className={classes.detailText}>{specie.language}</span>
    </Container>
  );

  const homeworld =
    specie && nameHomeWorld.name.length > 0
      ? specie.homeworld && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Howeworld: </span>
            <List className={classes.itemsList}>
              <ListItem key={nameHomeWorld.name} className={classes.listItem}>
                <Link
                  className={classes.link}
                  to={`/planets/${specie.homeworld.slice(
                    specie.homeworld.indexOf("planets") + "planets".length + 1,
                    specie.homeworld.length - 1
                  )}`}
                >
                  {nameHomeWorld.name}
                </Link>
              </ListItem>
            </List>
          </Container>
        )
      : null;

  const people =
    nameCharacters && nameCharacters.length > 0
      ? specie && (
          <Container className={classes.item}>
            <span className={classes.itemText}>People: </span>
            <List className={classes.itemsList}>
              {specie.people.map((person, index) => (
                <ListItem key={person} className={classes.listItem}>
                  <Link
                    className={classes.link}
                    to={`/people/${person.slice(
                      person.indexOf("people") + "people".length + 1,
                      person.length - 1
                    )}`}
                  >
                    {nameCharacters[index]}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Container>
        )
      : null;

  const films =
    nameMovies && nameMovies.length > 0
      ? specie && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Films: </span>
            <List className={classes.itemsList}>
              {specie.films.map((film, index) => (
                <ListItem key={film} className={classes.listItem}>
                  <Link
                    className={classes.link}
                    to={`/films/${film.slice(
                      film.indexOf("films") + "films".length + 1,
                      film.length - 1
                    )}`}
                  >
                    {nameMovies[index]}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Container>
        )
      : null;

  const specieList =
    specie && specie ? (
      <Paper className={classes.specieList}>
        {name}
        {classification}
        {designation}
        {averageHeight}
        {averageLifespan}
        {eyeColors}
        {hairColors}
        {skinColors}
        {language}
        {homeworld}
        {people}
        {films}
      </Paper>
    ) : (
      <Loading />
    );

  return (
    <Container className={classes.detailSpecie}>
      <Paper className={classes.paper}>
        <Menu />
        <Typography className={classes.title}>Specie</Typography>
        <IconButton
          className={classes.iconButton}
          aria-label="Back"
          onClick={prevPage}
        >
          <ArrowBackIos />
        </IconButton>
      </Paper>
      {isLoading ? <Loading /> : specieList}
    </Container>
  );
};

export default DetailsSpecie;
