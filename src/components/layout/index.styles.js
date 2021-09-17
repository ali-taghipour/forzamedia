import {makeStyles} from "@material-ui/core";


export const styles = makeStyles((theme) => ({
    header:{
        position: "fixed",
        zIndex: 50,
        left: "0",
        top: "40px",
        padding: "0 45px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center"
    }
}))