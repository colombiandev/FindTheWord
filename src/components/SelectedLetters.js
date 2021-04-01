import Word from './Word';
import { makeStyles } from '@material-ui/core/styles';


const SelectedLetters = (props) => {

    const useStyles = makeStyles({
        letters: {
            maxWidth: 1000,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
        },
    });

    const getLetters = () => {
        return(
            Object.keys(props.selectedLetters).map((key) => {
                return (
                    <Word 
                        key={key}
                        id={key}
                        letter={props.selectedLetters[key]}
                        selectedLetters={props.selectedLetters}
                        setSelectedLetters={props.setSelectedLetters}
                    />
                );
            })
        );
    }

    const classes = useStyles();

    return (
        <div className={classes.letters}>
            {getLetters()}
        </div>
    );
}

export default SelectedLetters;