import React,{useEffect} from "react";
import {Link} from "gatsby";

import Grid from "@material-ui/core/Grid";

import {styles} from "./animatedArrow.styles";

const Arrow = () => {
    const classes = styles();

    return(
        <Link to={"#"}>
          <svg className={classes.arrows}>
            <path className={classes.a3} d="M0 40 L20 72 L40 40"></path>
        </svg>
        </Link>
    )
}

export {Arrow};