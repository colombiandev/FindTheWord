import Word from './Word';


const FoundWords = (props) => {

    return(
        <div>
            {`${props.findWords}`}
            <Word />
        </div>
    );
}

export default FoundWords;