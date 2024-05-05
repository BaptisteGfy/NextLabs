"use client";

import { Board } from "@/tetris/components/Board";

const board = Array.from(Array(20), () => Array(10).fill([0, "clear"]));

export default function Gamespage() {
  return (
    <main className="my-3 flex flex-1 flex-col items-center">
      <h1>Hello World 👋</h1>
      <p>Ici il y aura des jeux ( tetris... )</p>
      <h2>Tétris</h2>
      <Board currentBoard={board} />
    </main>
  );
}
