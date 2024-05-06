import { Cell } from "./Cell";
import { BoardShape } from "@/components/tetris/tetris-type";
import "@/components/tetris/tetris.css";

export type BoardProps = {
  currentBoard: BoardShape;
};

export const Board = ({ currentBoard }: BoardProps) => {
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
