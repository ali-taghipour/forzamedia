import {makeStyles} from "@material-ui/core";


export const styles = makeStyles((theme) => ({
    media:{
        position: "absolute",
        right: "0",
        bottom: "0",
        minWidth: "100%",
        minHeight: "100%",
        objectFit: "cover",
        zIndex: -10
    },
    overlay:{
        position: "absolute",
        zIndex:10,
        right: "0",
        bottom: "0",
        minWidth: "100%",
        minHeight: "100%",
        color: "#fff",
        paddingRight: "40px",
        paddingLeft: "40px"
    },
    header:{
        position: "fixed",
        left: "0",
        top: "40px",
        padding: "0 60px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center"
    },
    container:{
        width:"100%",
        height:"100vh"
    }
}))