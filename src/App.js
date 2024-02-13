import NavBar from "./Component/NavBar/NavBar";
import "./App.css";
import React from "react";
import Banner from "./Component/Banner/Banner";
import RowPost from "./Component/RowPost/RowPost";
import {
  original,
  action,
  trending,
  ComedyMovies,
  HorrorMovies,
  RomanceMovies,
  Documentaries,
} from "./urls";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={original} title="Netflix Originals" />
      <RowPost url={trending} title="trending" isSmall />
      <RowPost url={ComedyMovies} title="ComedyMovies" isSmall />
      <RowPost url={action} title="action" isSmall />
      <RowPost url={HorrorMovies} title="HorrorMovies" isSmall />
      <RowPost url={RomanceMovies} title="RomanceMovies" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
