interface AnswerGridProps {
  currentWord: string;
  words: string[];
  activeRow: number;
}

const AnswerGrid = ({ currentWord, words, activeRow }: AnswerGridProps) => {
  const renderCell = (character: string, rowIndex: number, index: number) => {
    return (
      <div className="answer-cell" key={`answer-cell-${rowIndex}-${index}`}>
        <span className="answer-cell-character">
          {character.toUpperCase() ?? ""}
        </span>
      </div>
    );
  };

  const renderRow = (word: string, rowIndex: number) => {
    return rowIndex === activeRow ? (
      <div className="answer-row" key={"answer-row-" + rowIndex}>
        {renderCell(currentWord[0] ?? "", rowIndex, 0)}
        {renderCell(currentWord[1] ?? "", rowIndex, 1)}
        {renderCell(currentWord[2] ?? "", rowIndex, 2)}
        {renderCell(currentWord[3] ?? "", rowIndex, 3)}
        {renderCell(currentWord[4] ?? "", rowIndex, 4)}
      </div>
    ) : (
      <div className="answer-row" key={"answer-row-" + rowIndex}>
        {renderCell(word[0] ?? "", rowIndex, 0)}
        {renderCell(word[1] ?? "", rowIndex, 1)}
        {renderCell(word[2] ?? "", rowIndex, 2)}
        {renderCell(word[3] ?? "", rowIndex, 3)}
        {renderCell(word[4] ?? "", rowIndex, 4)}
      </div>
    );
  };

  return (
    <div className="answer-container">
      {words.map((word, rowIndex) => renderRow(word, rowIndex))}
    </div>
  );
};

export default AnswerGrid;
