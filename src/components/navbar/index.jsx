import React from "react";
import {Link} from "gatsby";

import Grid from "@material-ui/core/Grid";

import {styles} from "./index.styles";

const routes = [{id:1 ,name:"Home Page", href: "/"},
                {id:2 ,name:"Our Projects", href: "/#"},
                {id:3 ,name:"About Us", href: "/#"},
                {id:4 ,name:"Contact Us", href: "/#"}]

const Navbar = () => {
    const classes = styles();

    return(
        <Grid className={classes.navbarContainer}>
            {routes.map(route => {
                return(
                    <Link key={route.id} style={{color: window.location.pathname === route.href ? "#a01fff" : undefined}} to={route.href}>{route.name}</Link>
                )
            })}
        </Grid>
    )
}

export {Navbar};