import './App.css';
import FoundWords from'./components/FoundWords';
import LetterPicker from './components/LetterPicker';
import ResultButtons from './components/ResultButtons';
import SelectedLetters from './components/SelectedLetters';
import WordLength from './components/WordLength';
import { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const alphabet = ["A", "B", "C", "D", "E", "F", "H", "G", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const minWordLength = 2;
  const maxWordLength = 15;
  const [wordLength, setWordLength] = useState(minWordLength);
  const [selectedLetters, setSelectedLetters] = useState({});
  const [findWords, setFindWords] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:9000/testAPI')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log("ERR", err);
    })
    .then(() => {
      console.log("kek");
    })
  }, [])

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
        <ResultButtons 
          findWords={findWords}
          setSelectedLetters={setSelectedLetters}
          setFindWords={setFindWords}
        />
        <SelectedLetters 
          findWords={findWords}
          selectedLetters={selectedLetters}
          wordLength={wordLength}
          setSelectedLetters={setSelectedLetters}
        />
        <FoundWords 
          findWords={findWords}
        />
      </header>
    </div>
  );
}

export default App;