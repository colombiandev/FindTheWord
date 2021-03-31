import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const Letter = (props) => {

    const useStyles = makeStyles({
        root: {
          margin: 5,
        },
      });
    const classes = useStyles();

    const LetterClicked = (e) => {
        let updatedSelectedLetters = props.selectedLetters.filter((letter) => letter !== e.currentTarget.value);
        if (updatedSelectedLetters.length === props.selectedLetters.length) {
            props.setSelectedLetters([...props.selectedLetters, e.currentTarget.value.toString()]);
        } else {
            props.setSelectedLetters([...updatedSelectedLetters]);
        }
    }

    return (
        <div className={classes.root}>
            <Button
            variant="contained" 
            color="primary" 
            value={props.letter}
            onClick={LetterClicked.bind(this)}>
                <Typography variant="h5" component="h2">
                    {props.letter}
                </Typography>
            </Button>
        </div>
    );
}

export default Letter;