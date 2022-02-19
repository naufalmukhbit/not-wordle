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
          <div
            className="keyboard--cell keyboard--cell-special"
            key="keyboard-cell-enter"
            onClick={() => onSpecialButton("enter")}
          >
            ENTER
          </div>
        )}
        {letters.map((letter) => (
          <div
            className="keyboard--cell"
            key={"keyboard-cell-" + letter}
            onClick={() => onLetterPress(letter)}
          >
            {letter}
          </div>
        ))}
        {index === 2 && (
          <div
            className="keyboard--cell keyboard--cell-special"
            key="keyboard-cell-delete"
            onClick={() => onSpecialButton("delete")}
          >
            DELETE
          </div>
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
