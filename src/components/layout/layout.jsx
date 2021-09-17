import React,{useState,useEffect} from "react";
import { Link } from "gatsby"

import Logo from "../../assets/images/Forza-Final-Logo.svg";

import {Navbar} from "../navbar/index";

import Grid from "@material-ui/core/Grid";
import Grow from '@material-ui/core/Grow';

import {styles} from "./index.styles";

const Layout = ({ location, title, children }) => {
  const classes = styles();
  
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  const [fade,setFade] = useState(false);

  useEffect(() => {
    if(window.location.pathname === "/"){
      setFade(true);
    }
  },[window.location.pathname])
 

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Grow
          in={fade}
          style={{ transformOrigin: '0 0 0' }}
          {...(fade ? { timeout: 1000 } : {})}
        >
          <Grid className={classes.header}>
              <Grid>
                  <img src={Logo} />
              </Grid>
              <Navbar />
          </Grid>
        </Grow>
        
      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
