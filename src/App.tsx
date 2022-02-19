import { useEffect, useState } from "react";
import "./App.scss";
import AnswerGrid from "./components/AnswerGrid";
import VirtualKeyboard from "./components/Keyboard";

function App() {
  const [currentWord, setCurrentWord] = useState("");
  const [words, setWords] = useState<string[]>([...Array<string>(6)].fill(""));
  const [activeRow, setActiveRow] = useState(0);

  const onLetterPress = (letter: string) => {
    if (currentWord.length < 5) {
      setCurrentWord((word) => {
        console.log(word + letter);
        return word + letter;
      });
    }
  };

  const onSpecialButton = (action: "delete" | "enter") => {
    if (action === "delete") {
      currentWord.length > 0 && setCurrentWord((word) => word.slice(0, -1));
    } else {
      if (activeRow < 6 && currentWord.length === 5) {
        setWords((current) => {
          current[activeRow] = currentWord;
          return current;
        });
        setActiveRow((row) => row + 1);
        setCurrentWord("");
      }
    }
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AnswerGrid
          words={words}
          currentWord={currentWord}
          activeRow={activeRow}
        />
        <VirtualKeyboard
          onLetterPress={onLetterPress}
          onSpecialButton={onSpecialButton}
        />
      </header>
    </div>
  );
}

export default App;
