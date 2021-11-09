import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "../globalStore/store/store";
import Login from './Login/Login';
import useToken from '../components/Login/useToken';
import Home from "./Layouts/Home/Home";
import Movies from "./Layouts/Movies/Movies";
import Characters from "./Layouts/Characters/Characters";
import DetailsMovie from "./Layouts/Details/DetailsMovie";
import DetailsCharacter from "./Layouts/Details/DetailsCharacter";
import DetailsPlanet from "./Layouts/Details/DetailsPlanet";
import DetailsVehicle from "./Layouts/Details/DetailsVehicle";
import DetailsStarship from "./Layouts/Details/DetailsStarship";
import DetailsSpecie from "./Layouts/Details/DetailsSpecie";

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/films" component={Movies} />
          <Route exact path="/people" component={Characters} />
          <Route exact path="/films/:id" component={DetailsMovie} />
          <Route exact path="/people/:id" component={DetailsCharacter} />
          <Route exact path="/planets/:id" component={DetailsPlanet} />
          <Route exact path="/starships/:id" component={DetailsStarship} />
          <Route exact path="/vehicles/:id" component={DetailsVehicle} />
          <Route exact path="/species/:id" component={DetailsSpecie} />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
