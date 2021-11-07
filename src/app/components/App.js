import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/films" element={<Movies />} />
          <Route exact path="/people" element={<Characters />} />
          <Route exact path="/films/:id" element={<DetailsMovie />} />
          <Route exact path="/people/:id" element={<DetailsCharacter />} />
          <Route exact path="/planets/:id" element={<DetailsPlanet />} />
          <Route exact path="/starships/:id" element={<DetailsStarship />} />
          <Route exact path="/vehicles/:id" element={<DetailsVehicle />} />
          <Route exact path="/species/:id" element={<DetailsSpecie />} />
          </Routes>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
