"use client";

import { useState } from "react";

function PlayerRow({ number, name }: { number: number; name: string }) {
  return (
    <div className="flex flex-col items-center">
      <input
        className="md:w-48 w-28 h-12 rounded-lg border-2 border-gray-300 px-4 text-zinc-900"
        placeholder={name}
      />
      <input
        className="md:w-48 w-28 h-12 rounded-lg border-2 border-gray-300 px-4  text-zinc-900"
        placeholder="0"
        type="number"
        id={`player-${number}-round-1`}
      />
      <input
        className="md:w-48 w-28 h-12 rounded-lg border-2 border-gray-300 px-4  text-zinc-900"
        placeholder="0"
        type="number"
        id={`player-${number}-round-2`}
      />
      <input
        className="md:w-48 w-28 h-12 rounded-lg border-2 border-gray-300 px-4  text-zinc-900"
        placeholder="0"
        type="number"
        id={`player-${number}-round-3`}
      />
      <input
        className="md:w-48 w-28 h-12 rounded-lg border-2 border-gray-300 px-4  text-zinc-900"
        placeholder="0"
        type="number"
        id={`player-${number}-bonus`}
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
        className="md:w-48 w-28 h-12 rounded-lg border-2 border-gray-300 px-4"
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
  };
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="flex flex-row items-center">
        <RowTitle />
        {players.map((player, index) => {
          return <PlayerRow name={player} number={index + 1} key={player} />;
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
