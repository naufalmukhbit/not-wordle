import { answerType, statusType } from "../App";

interface AnswerGridProps {
  currentWord: string;
  words: string[];
  answers: answerType[];
  activeRow: number;
}

const AnswerGrid = ({ currentWord, answers, activeRow }: AnswerGridProps) => {
  const renderCell = (character: string, rowIndex: number, index: number, status?: statusType) => {
    return (
      <div className={`answer-cell ${status}`} key={`answer-cell-${rowIndex}-${index}`}>
        <span className="answer-cell-character">
          {character.toUpperCase() ?? ""}
        </span>
      </div>
    );
  };

  const renderRow = (answer: answerType, rowIndex: number) => {
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
        {renderCell(answer.word[0] ?? "", rowIndex, 0, answer.status && answer.status[0])}
        {renderCell(answer.word[1] ?? "", rowIndex, 1, answer.status && answer.status[1])}
        {renderCell(answer.word[2] ?? "", rowIndex, 2, answer.status && answer.status[2])}
        {renderCell(answer.word[3] ?? "", rowIndex, 3, answer.status && answer.status[3])}
        {renderCell(answer.word[4] ?? "", rowIndex, 4, answer.status && answer.status[4])}
      </div>
    );
  };

  return (
    <div className="answer-container">
      {answers.map((answer, rowIndex) => renderRow(answer, rowIndex))}
    </div>
  );
};

export default AnswerGrid;
