import { makeStyles } from '@material-ui/core/styles';
import { Slider, Typography } from '@material-ui/core';

const WordLength = (props) => {
    // const [wordLength, setWordLength] = useState(defaultWordLength);

    const useStyles = makeStyles({
        root: {
            marginTop: 40,
        },
        slider: {
          minWidth: 350,
          maxWidth: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 50,
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
    
    const setWordLength = (e, val) => {
        props.setWordLength(val);
    }

    return (
        <div className={classes.root}>
            <Typography variant="h5">
                Pick Your Word Length!
            </Typography>
            <div className={classes.slider}>
                <span className={classes.minSliderLabel}>
                    {props.minWordLength}
                </span>
                <Slider
                    color="primary"
                    defaultValue={props.minWordLength}
                    onChange={setWordLength}
                    aria-labelledby="discrete-slider"
                    step={1}
                    marks={true}
                    min={props.minWordLength}
                    max={props.maxWordLength}
                    valueLabelDisplay="auto"
                />
                <span className={classes.maxSliderLabel}>
                    {props.maxWordLength}
                </span>
            </div>
        </div>
    );
}

export default WordLength;