import './App.css';
import Letter from './components/Letter';
import WordLength from './components/WordLength';
import WordContainer from './components/WordContainer';
import { useState, useEffect } from 'react';

const App = () => {
  const alphabet = ["A", "B", "C", "D", "E", "F", "H", "G", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const minWordLength = 2;
  const maxWordLength = 15;
  const [wordLength, setWordLength] = useState(minWordLength);
  const [selectedLetters, setSelectedLetters] = useState([]);

  const makeLetters = () => {
    return(
      alphabet.map((letter) => {
        return (
          <Letter 
            key={letter}
            letter={letter} 
            selectedLetters={selectedLetters}
            setSelectedLetters={setSelectedLetters}
          />
        );
      })
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        Pick Your Letters! {wordLength}
        <div className="Letters">
          {makeLetters()}
        </div>
        <WordLength
          minWordLength={minWordLength}
          maxWordLength={maxWordLength}
          setWordLength={setWordLength}
        />
        <WordContainer 
          selectedLetters={selectedLetters}
        />
      </header>
    </div>
  );
}

export default App;