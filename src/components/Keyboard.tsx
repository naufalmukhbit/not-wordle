interface KeyboardProps {
  onLetterPress: (letter: string) => void;
  onSpecialButton: (action: "delete" | "enter") => void;
}

const Keyboard = ({ onLetterPress, onSpecialButton }: KeyboardProps) => {
  const rows: string[] = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  const renderKeyboardRow = (letters: string[], index: number) => {
    return (
      <div className="keyboard--row-container" key={"keyboard-row-" + index}>
        {index === 2 && (
          <button
            className="keyboard--cell keyboard--cell-special"
            key="keyboard-cell-enter"
            onClick={() => onSpecialButton("enter")}
          >
            ENTER
          </button>
        )}
        {letters.map((letter) => (
          <button
            className="keyboard--cell"
            key={"keyboard-cell-" + letter}
            onClick={() => onLetterPress(letter)}
          >
            {letter}
          </button>
        ))}
        {index === 2 && (
          <button
            className="keyboard--cell keyboard--cell-special"
            key="keyboard-cell-delete"
            onClick={() => onSpecialButton("delete")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="currentColor" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg>
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="keyboard-container">
      {rows.map((row, index) => renderKeyboardRow([...row], index))}
    </div>
  );
};

export default Keyboard;
