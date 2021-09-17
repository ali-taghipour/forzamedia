import {makeStyles} from "@material-ui/core";


export const styles = makeStyles((theme) => ({
    arrows:{
        width: "60px",
        height: "72px",
        position: "absolute",
        left: "50%",
        marginLeft: "-30px",
        bottom: "20px",
        "& > path":{
            stroke: "#fff",
            fill: "transparent",
            strokeWidth: "1px",	
            animation: "$arrow 2s infinite"
        },
        "@global":{
        "@keyframes arrow":{
            "0%":{opacity:0},
            "40%":{opacity:1},
            "80%":{opacity:0},
            "100%":{opacity:1}
            },
            "& > path.a3":{	
                animationDelay:"0s"
            }
        }
    },
    
}))