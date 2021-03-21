import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "50%",
    height: "50%",
    justifyContent: "center",
    float: "right",
    marginTop: "10px",
  },
  title: {
    fontSize: 16,
  },
  pos: {
    fontSize: 14,
    marginBottom: 12,
  },
});

const CardMovies = ({ movie }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textPrimary">
            {movie.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {movie.url}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardMovies;
