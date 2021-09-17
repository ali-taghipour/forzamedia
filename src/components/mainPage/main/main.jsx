import React,{useEffect} from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import {styles} from "./main.styles";

const Main = () => {
    const classes = styles();


    return(
      <Grid className={classes.container} direction="column">
        <Grid className={classes.description}>
          We deliver digital<br/>
          products &amp; strategies that<br/>
          help you grow
        </Grid>

        <Grid>
          <Button className={classes.button}>
            Check out our works
          </Button>
        </Grid>
      </Grid>
    )
}

export {Main};