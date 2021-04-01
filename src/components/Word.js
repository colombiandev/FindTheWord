import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const Word = (props) => {
    const useStyles = makeStyles({
        root: {
            margin: 5,
        },
    });
    
    const deleteLetter = async () => {
        let updatedSelectedLettersKeys = await Object.fromEntries(Object.entries(props.selectedLetters).filter(([k,v]) => k !== props.id));
        props.setSelectedLetters(updatedSelectedLettersKeys);
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>            
            <Button
                variant="contained" 
                color="secondary"
                value={props.letter}
                onClick={deleteLetter.bind(this)}
            >
                    <Typography variant="h5" component="h2">
                        {props.letter}
                    </Typography>
            </Button>
        </div>
    );
}

export default Word;