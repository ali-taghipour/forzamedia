import {makeStyles} from "@material-ui/core";


export const styles = makeStyles((theme) => ({
    container:{
        height: "65vh",
        display: "flex",
        justifyContent: "flex-end"
    },
    description:{
        fontSize: "25px",
        fontWeight: "300",
    },
    button:{
        background: "#701fff",
        fontSize: "10px",
        textTransform: "none",
        padding: "8px 10px",
        borderRadius: "20px",
        marginTop: "30px",
        color: "#fff",
        "&:hover":{
            background: "#801fff"
        }
    }
}))