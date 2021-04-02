import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import uuid from 'react-uuid';

const Letter = (props) => {

    const useStyles = makeStyles({
        root: {
          margin: 5,
          size: "small",
        },
      });
    const classes = useStyles();

    const letterClicked = (e) => {
        let letter = e.currentTarget.value.toString();
        props.setSelectedLetters({...props.selectedLetters, [uuid()]: letter});
    }

    return (
        <div className={classes.root}>
            <Button
                variant="contained" 
                color="primary"
                value={props.letter}
                onClick={letterClicked.bind(this)}>
                    <Typography variant="h6">
                        {props.letter}
                    </Typography>
            </Button>
        </div>
    );
}

export default Letter;