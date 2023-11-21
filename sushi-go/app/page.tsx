"use client";

import { useState } from "react";

import PlayerRow from "./components/PlayerRows";
import RowTitle from "./components/RowTitle";

import { calculateScores } from "./utils/calculateScores";

export default function Home() {
  const [players, setPlayers] = useState(["Jan", "Mommy", "Daddy"]);
  const [newPlayer, setNewPlayer] = useState("");

  const addPlayer = () => {
    if (newPlayer === "") return;
    if (players.includes(newPlayer)) return;

    setPlayers([...players, newPlayer.trim()]);
    setPlayerScore([...playerScore, [0, 0, 0, 0]]);
  };

  const [winnerOfRound1, setWinnerOfRound1] = useState(null as number | null);

  const calculateWinner = () => {
    const index = calculateScores(playerScore);

    setWinnerOfRound1(index);
  };

  const [playerScore, setPlayerScore] = useState(
    players.map(() => [0, 0, 0, 0])
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-row items-center">
        <RowTitle />
        {players.map((player, index) => {
          return (
            <PlayerRow
              name={player}
              number={index + 1}
              key={player}
              playerScore={playerScore}
              setPlayerScore={setPlayerScore}
            />
          );
        })}
      </div>
      <div className="mt-10">
        <input
          type="text"
          name="newPlayer"
          id="newPlayer"
          className="w-48 h-12 rounded-lg border-2 border-gray-300 px-4 text-zinc-900"
          onChange={(e) => {
            setNewPlayer(e.currentTarget.value);
          }}
        />
        <button
          onClick={addPlayer}
          className="w-48 h-12 rounded-lg border-2 border-gray-300 px-4 hover:bg-green-600 hover:text-black"
        >
          Add Player
        </button>
        <button
          className="w-48 h-12 rounded-lg border-2 border-gray-300 px-4 bg-green-900 hover:bg-green-600 hover:text-black"
          onClick={() => calculateWinner()}
        >
          Calculate
        </button>
      </div>
      <div className="mt-10">
        The winner of round 1 is:{" "}
        {winnerOfRound1 !== null ? players[winnerOfRound1] : "TBC"}
      </div>
    </main>
  );
}
