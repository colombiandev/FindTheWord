import { Button, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';


const ResultButtons = (props) => {

    const useStyles = makeStyles({
        root: {
            display: "flex",
            justifyContent: "space-between",
            alignContent: "space-between",
            flexWrap: "wrap",
            maxWidth: 1000,
        },
        btn: {
            width: 100,
            margin: 25,
            marginTop: 0,
        }
    });

    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Button
                className={classes.btn}
                variant="contained" 
                color="secondary"
                value={props.letter}
                onClick={() => props.setFindWords(!props.findWords)}
            >
                    <Typography variant="h6">
                        Find
                    </Typography>
            </Button>
            <Button
                className={classes.btn}
                variant="contained" 
                color="secondary"
                value={props.letter}
                onClick={() => props.setSelectedLetters({})}
            >
                    <Typography variant="h6">
                        Clear
                    </Typography>
            </Button>
        </div>
    );
}

export default ResultButtons;