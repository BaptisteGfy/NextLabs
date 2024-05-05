import { CellOptions } from "@/components/tetris/tetris-type";

export type CellProps = {
  type: CellOptions;
};

export const Cell = ({ type }: CellProps) => {
  return <div className={`cell ${type}`} />;
};
