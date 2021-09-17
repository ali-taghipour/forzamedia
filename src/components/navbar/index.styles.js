import {makeStyles} from "@material-ui/core";


export const styles = makeStyles((theme) => ({
    navbarContainer:{
        display: "flex",
        gap: "20px",
        "& > a":{
            textDecoration: "none",
            color: "#fff",
            "&:hover":{
                color: "#a01fff"
            }
        }
    }
}))