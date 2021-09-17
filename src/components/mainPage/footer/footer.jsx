import React,{useEffect} from "react";
import {Link} from "gatsby";

import Grid from "@material-ui/core/Grid";

import Instagram from "@material-ui/icons/Instagram";
import Linkedin from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";

import {Arrow} from "../../common/animatedArrow"

import {styles} from "./footer.styles";

const Footer = () => {
    const classes = styles();

    return(
        <Grid className={classes.container}>
          <Grid className={classes.iconContainer}>
            <Link to={"#"}><Instagram/></Link>
            <Link to={"#"}><Linkedin/></Link>
            <Link to={"#"}><Twitter/></Link>
          </Grid>
          <Grid>
            <Arrow />
          </Grid>
          <Grid className={classes.iconContainer}>
            <Link to={"#"}><Phone/></Link>
            <Link to={"#"}><Email/></Link>
          </Grid>
        </Grid>
    )
}

export {Footer};