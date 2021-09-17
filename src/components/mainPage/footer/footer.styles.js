import {makeStyles} from "@material-ui/core";


export const styles = makeStyles((theme) => ({
    container:{
        display: "flex",
        height: "35vh",
        alignItems: "flex-end",
        paddingBottom: "20px",
        justifyContent: "space-between"
    },
    iconContainer:{
        display: "flex",
        gap: "20px",
        "& > a > svg":{
            fill: "#fff"
        }
    }
}))