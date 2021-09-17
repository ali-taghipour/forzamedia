import {makeStyles} from "@material-ui/core";


export const styles = makeStyles((theme) => ({
   container:{
       position: "relative",
       top: "0",
       height: "100vh",
       background: "black",
       color: "#fff"
   },
   header:{
    position: "relative",
    top: "25vh",
    marginLeft:"40px",
    "& > div":{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        color: "gray"
    },
    "& > div > h4":{
        color: "#fff",
        padding: "0",
        margin: "0",
    },
    "& > div > span":{
        color: "#fff",
        fontSize: "14px"
    }
   }
}))