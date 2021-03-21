import React, { useEffect, useState } from "react";

import api from "./utils/api";

import Navbar from "./components/Header/Navbar";
import CardMovies from "./components/Card/CardMovies";

import { Typography, Box } from "@material-ui/core";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get("star%20wars").then((response) => {
      setMovies(response.data);
    });
  }, [movies]);

  const userCanEdit = true;

  return (
    <>
      <Navbar />
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginTop: "10px" }}
      >
        Star Wars
      </Typography>
      <Box>
        {movies.map((movie) => (
          <CardMovies
            key={movie.show.id}
            movie={movie.show}
            userEdit={userCanEdit}
          />
        ))}
      </Box>
    </>
  );
};

export default App;
