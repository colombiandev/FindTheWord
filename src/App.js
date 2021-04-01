import './App.css';
import WordLength from './components/WordLength';
import SelectedLetters from './components/SelectedLetters';
import LetterPicker from './components/LetterPicker';
import { useState } from 'react';


const App = () => {
  const alphabet = ["A", "B", "C", "D", "E", "F", "H", "G", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const minWordLength = 2;
  const maxWordLength = 15;
  const [wordLength, setWordLength] = useState(minWordLength);
  const [selectedLetters, setSelectedLetters] = useState({});

  

  return (
    <div className="App">
      <header className="App-header">
        <LetterPicker
          alphabet={alphabet}
          selectedLetters={selectedLetters}
          setSelectedLetters={setSelectedLetters}
        />
        <WordLength
          minWordLength={minWordLength}
          maxWordLength={maxWordLength}
          setWordLength={setWordLength}
        />
        <SelectedLetters 
          selectedLetters={selectedLetters}
          setSelectedLetters={setSelectedLetters}
          wordLength={wordLength}
        />
      </header>
    </div>
  );
}

export default App;