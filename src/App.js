import React, { useEffect, useState } from "react";

import api from "./utils/api";

import Navbar from "./components/Header/Navbar";
import CardMovies from "./components/Card/CardMovies";

import { TextField, Box, Grid, Button } from "@material-ui/core";
import useStyles from "./styles/styles";

const App = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get("star%20wars").then((response) => {
      setMovies(response.data);
    });
  }, [movies]);

  return (
    <>
      <Navbar />
      <Grid className={classes.grid}>
        <TextField
          className={classes.search}
          placeholder="Search"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button className={classes.button} variant="contained">
          Search
        </Button>
      </Grid>
      <Box>
        {movies.map((movie) => (
          <CardMovies key={movie.show.id} movie={movie.show} />
        ))}
      </Box>
    </>
  );
};

export default App;
