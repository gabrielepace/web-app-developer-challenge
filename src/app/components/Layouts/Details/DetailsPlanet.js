import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlanet } from "../../../globalStore/thunks/thunkPlanet";
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
  detailPlanet: {
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
  planetList: {
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

const DetailsPlanet = ({ match, history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { id } = match.params;

  React.useEffect(() => {
    dispatch(getPlanet(id));
  }, [dispatch, id]);

  const prevPage = () => {
    history.go(-1);
  };

  const upperCase = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatPopulation = surface => {
    return surface.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const isLoading = useSelector(state => state.isLoading);
  const planet = useSelector(state => state.planet);
  const nameCharacters = useSelector(state => state.nameCharacters);
  const nameMovies = useSelector(state => state.nameMovies);

  const name = planet && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Name: </span>
      <span className={classes.detailText}>{planet.name}</span>
    </Container>
  );

  const rotationPeriod = planet && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Rotation Period: </span>
      <span className={classes.detailText}>{planet.rotation_period} hours</span>
    </Container>
  );

  const orbitalPeriod = planet && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Orbital Period: </span>
      <span className={classes.detailText}>{planet.orbital_period} days</span>
    </Container>
  );

  const diameter = planet && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Diameter: </span>
      <span className={classes.detailText}>{planet.diameter} km</span>
    </Container>
  );

  const climate = planet && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Climate: </span>
      <span className={classes.detailText}>{upperCase(planet.climate)}</span>
    </Container>
  );

  const gravity = planet && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Gravity:</span>
      <span className={classes.detailText}>
        {planet.gravity === 1
          ? "Standard G."
          : planet.gravity === 2
          ? "2 Standard G."
          : "0.5 Standard G."}
      </span>
    </Container>
  );

  const terrain = planet && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Terrain: </span>
      <span className={classes.detailText}>
        {planet.terrain.charAt(0).toUpperCase() + planet.terrain.slice(1)}
      </span>
    </Container>
  );

  const surfaceWater = planet && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Surface Water: </span>
      <span className={classes.detailText}>
        {planet.surface_water === "unknown"
          ? upperCase(planet.surface_water)
          : `${planet.surface_water}%`}
      </span>
    </Container>
  );

  const population = planet && (
    <Container className={classes.item}>
      <span className={classes.itemText}>Population: </span>
      <span className={classes.detailText}>
        {formatPopulation(planet.population)}
      </span>
    </Container>
  );

  const films =
    nameMovies && nameMovies.length > 0
      ? planet && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Films: </span>
            <List className={classes.itemsList}>
              {planet.films.map((film, index) => (
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

  const residents =
    nameCharacters && nameCharacters.length > 0
      ? planet && (
          <Container className={classes.item}>
            <span className={classes.itemText}>Residents: </span>
            <List className={classes.itemsList}>
              {planet.residents.map((resident, index) => (
                <ListItem key={resident} className={classes.listItem}>
                  <Link
                    className={classes.link}
                    to={`/people/${resident.slice(
                      resident.indexOf("people") + "people".length + 1,
                      resident.length - 1
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

  const planetList =
    planet && planet ? (
      <Paper className={classes.planetList}>
        {name}
        {rotationPeriod}
        {orbitalPeriod}
        {diameter}
        {climate}
        {gravity}
        {terrain}
        {surfaceWater}
        {population}
        {residents}
        {films}
      </Paper>
    ) : (
      <Loading />
    );

  return (
    <Container className={classes.detailPlanet}>
      <Paper className={classes.paper}>
        <Menu />
        <Typography className={classes.title}>Planet</Typography>
        <IconButton
          className={classes.iconButton}
          aria-label="Back"
          onClick={prevPage}
        >
          <ArrowBackIos />
        </IconButton>
      </Paper>
      {isLoading ? <Loading /> : planetList}
    </Container>
  );
};

export default DetailsPlanet;
