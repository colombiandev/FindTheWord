import Word from './Word';

const WordContainer = (props) => {

    const getLetters = () => {
        return(
            props.selectedLetters.map((letter) => {
                return (
                    <Word 
                        key={letter}
                        letter={letter} 
                    />
                );
            })
        );
    }

    return (
        <div>
            {getLetters()}
        </div>
    );
}

export default WordContainer;