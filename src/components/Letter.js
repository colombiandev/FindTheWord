import { Button, Typography } from '@material-ui/core';

const Letter = (props) => {
    const LetterClicked = (e) => {
        console.log(e.currentTarget.value);
    }
    return (
        <>
            <Button 
            variant="contained" 
            color="primary" 
            value={props.Letter}
            onClick={LetterClicked.bind(this)}>
                <Typography variant="h5" component="h2">
                    {props.Letter}
                </Typography>
            </Button>
        </>
    );
}

export default Letter;