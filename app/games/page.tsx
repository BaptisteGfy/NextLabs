import { Board } from "@/components/tetris/Board";
import React from "react";

export default function Gamespage() {
  return (
    <main className="my-3 flex flex-1 flex-col items-center">
      <h1>Hello World 👋</h1>
      <p>Ici il y aura des jeux ( tetris... )</p>
      <Board />
    </main>
  );
}
