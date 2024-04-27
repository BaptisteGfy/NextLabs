import { BoardShape } from "./tetris-type";

export type BoardProps = {
  currentBoard: BoardShape;
};

export const Board = (props: BoardProps) => {
  return (
    <div className="board">
      {currentBoard.map((row, rowIndex) => (
        <div className="row">
          {row.map((cell, cellIndex) => (
            <Cell key={`${rowIndex}-${cellIndex}`} type={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};
