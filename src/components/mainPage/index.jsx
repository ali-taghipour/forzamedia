import React,{useState,useEffect} from "react";

import video from "../../assets/vedios/Untitled-compressed.mp4";

import Grid from "@material-ui/core/Grid";
import Grow from '@material-ui/core/Grow';
import {Main} from "./main";
import {Footer} from "./footer";

import {styles} from "./index.styles";

const MainPage = () => {
    const classes = styles();

    const [fade,setFade] = useState(false);

  useEffect(() => {
    if(window.location.pathname === "/"){
      setFade(true);
    }
  },[window.location.pathname])

    return(
        <Grid className={classes.container}>
        <video className={classes.media} autoPlay muted loop playsInline>
            <source src={video} type="video/mp4"/>
        </video>
        <Grow
          in={fade}
          style={{ transformOrigin: '0 0 0' }}
          {...(fade ? { timeout: 3000 } : {})}
        >
          <Grid className={classes.overlay}>
            <Main />
            <Footer />
          </Grid>
        </Grow>
        </Grid>
    )
}

export {MainPage};