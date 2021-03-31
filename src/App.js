import './App.css';
import Letter from './components/Letter';
import WordLength from './components/WordLength';
import WordContainer from './components/WordContainer';
import { useState } from 'react';

const App = () => {
  const alphabet = ["A", "B", "C", "D", "E", "F", "H", "G", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const minWordLength = 2;
  const maxWordLength = 15;
  const [wordLength, setWordLength] = useState(minWordLength);

  const makeLetters = () => {
    return(
      alphabet.map((letter) => {
        return <Letter Letter={letter} />
      })
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        Scrabble Solver! {wordLength}
        <div className="App-width">
          {makeLetters()}
        </div>
        <WordLength
          minWordLength={minWordLength}
          maxWordLength={maxWordLength}
          setWordLength={setWordLength}
        />
        <WordContainer />
      </header>
    </div>
  );
}

export default App;