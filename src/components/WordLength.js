import { makeStyles } from '@material-ui/core/styles';
import { Slider, Typography } from '@material-ui/core';

const WordLength = (props) => {
    // const [wordLength, setWordLength] = useState(defaultWordLength);

    const useStyles = makeStyles({
        root: {
            marginTop: 40,
            minWidth: 350,
            maxWidth: 1000,
        },
        slider: {
          display: 'flex',
          justifyContent: 'space-between',
          margin: 20,
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
                    <Typography variant="subtitle1">
                        {props.minWordLength}
                    </Typography>
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
                    <Typography variant="subtitle1">
                        {props.maxWordLength}
                    </Typography>
                </span>
            </div>
        </div>
    );
}

export default WordLength;