"use client";

import { useState } from "react";

type PlayerRowProps = {
  number: number;
  name: string;
  setPlayerScore: any;
  playerScore: any[];
};

function PlayerRow({
  number,
  name,
  setPlayerScore,
  playerScore,
}: PlayerRowProps) {
  const updatePlayerScore = (e: any) => {
    const value = e.target.value;
    const id = e.target.id.split("-");

    const playerNumberInt = parseInt(id[1]) - 1;
    const roundInt = id[3] === "bonus" ? 3 : parseInt(id[3]) - 1;

    const newPlayerScore = [...playerScore];

    newPlayerScore[playerNumberInt][roundInt] = parseInt(value);
    setPlayerScore(newPlayerScore);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="md:w-48 w-28 h-12 rounded-lg border-2 order-gray-300 px-4 text-white">
        <p className="font-bold text-center pt-2">{name}</p>
      </div>
      <input
        className="md:w-48 w-28 h-12 rounded-lg border-2 border-gray-300 px-4  text-zinc-900"
        placeholder="0"
        type="number"
        id={`player-${number}-round-1`}
        onChange={(e) => {
          updatePlayerScore(e);
        }}
      />
      <input
        className="md:w-48 w-28 h-12 rounded-lg border-2 border-gray-300 px-4  text-zinc-900"
        placeholder="0"
        type="number"
        id={`player-${number}-round-2`}
        onChange={(e) => {
          updatePlayerScore(e);
        }}
      />
      <input
        className="md:w-48 w-28 h-12 rounded-lg border-2 border-gray-300 px-4  text-zinc-900"
        placeholder="0"
        type="number"
        id={`player-${number}-round-3`}
        onChange={(e) => {
          updatePlayerScore(e);
        }}
      />
      <input
        className="md:w-48 w-28 h-12 rounded-lg border-2 border-gray-300 px-4  text-zinc-900"
        placeholder="0"
        type="number"
        id={`player-${number}-round-bonus`}
        onChange={(e) => {
          updatePlayerScore(e);
        }}
      />
    </div>
  );
}

function RowTitle() {
  const titles = [
    "Player Name",
    "Round 1",
    "Round 2",
    "Round 3",
    "Bonus Round",
  ];
  const titleElements = titles.map((title, index) => {
    return (
      <div
        key={index}
        className="pt-2 font-bold text-center md:w-48 w-28 h-12 rounded-lg border-2 border-gray-300 px-4"
      >
        {title}
      </div>
    );
  });
  return <div className="flex flex-col items-center">{titleElements}</div>;
}

export default function Home() {
  const [players, setPlayers] = useState(["Jan", "Mommy", "Daddy"]);
  const [newPlayer, setNewPlayer] = useState("");

  const addPlayer = () => {
    if (newPlayer === "") return;
    if (players.includes(newPlayer)) return;

    setPlayers([...players, newPlayer]);
    setPlayerScore([...playerScore, [0, 0, 0, 0]]);
  };

  const [playerScore, setPlayerScore] = useState(
    players.map(() => [0, 0, 0, 0])
  );

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
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
          className="w-48 h-12 rounded-lg border-2 border-gray-300 px-4"
        >
          Add Player
        </button>
        <button className="w-48 h-12 rounded-lg border-2 border-gray-300 px-4 bg-green-900">
          Calculate
        </button>
      </div>
    </main>
  );
}
