import Letter from './Letter';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const LetterPicker = (props) => {

    const useStyles = makeStyles({
        root: {
            size: "small",
        },
        letters: {
          maxWidth: 1000,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 10,
        },
    });


    const makeLetters = () => {
        return(
          props.alphabet.map((letter) => {
            return (
              <Letter 
                alphabet={props.alphabet}
                key={props.alphabet.indexOf(letter)}
                id={props.alphabet.indexOf(letter)}
                letter={letter} 
                selectedLetters={props.selectedLetters}
                setSelectedLetters={props.setSelectedLetters}
              />
            );
          })
        )
      }

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Typography variant="h5">
                Choose Your Letters!
            </Typography>
            <div className={classes.letters}>
                {makeLetters()}
            </div>
        </div>
        
    );
}

export default LetterPicker;