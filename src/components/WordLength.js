import { makeStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core';

const WordLength = (props) => {
    // const [wordLength, setWordLength] = useState(defaultWordLength);

    const useStyles = makeStyles({
        root: {
          width: 350,
          display: 'flex',
          justifyContent: 'space-between',
        },
        minSliderLabel: {
            marginRight: 15,
            fontSize: 20,
        },
        maxSliderLabel: {
            marginLeft: 15,
            fontSize: 20,
        },
      });
    const classes = useStyles();

    const updateWordLength = (wordLength) => {
        props.setWordLength(wordLength);
    }

    return (
        <div className={classes.root}>
            <span className={classes.minSliderLabel}>
                {props.minWordLength}
            </span>
            <Slider
                defaultValue={props.minWordLength}
                getAriaValueText={updateWordLength}
                aria-labelledby="discrete-slider"
                step={1}
                marks
                min={props.minWordLength}
                max={props.maxWordLength}
                valueLabelDisplay="auto"
            />
            <span className={classes.maxSliderLabel}>
                {props.maxWordLength}
            </span>
        </div>
    );
}

export default WordLength;