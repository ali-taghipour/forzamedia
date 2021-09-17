import React,{useState,useEffect} from "react";

import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

import {styles} from "./index.styles";

const ProjectsPage = () => {
    const classes = styles();

    return(
      <Grid className={classes.container}>
        <Grid className={classes.header}>
          <Grid>
            <Typography variant="h4">
              Our Projects
            </Typography>
            <Typography variant="caption"> 
              checkout the projects by opening them
            </Typography>
          </Grid>
          <Grid style={{marginTop: "20px"}}>
            <Typography variant="body"> 
              lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,<br/> lorem ipsum dolor sit amet
            </Typography>
          </Grid>
        </Grid>

        
      </Grid>
    )
}

export {ProjectsPage};