import ScoreInputs from "./ScoreInputs";

type PlayerRowProps = {
  number: number;
  name: string;
  setPlayerScore: any;
  playerScore: any[];
  players: string[];
};

export default function PlayerRow({
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

  const rounds = [1, 2, 3, "bonus"];

  return (
    <div className="flex flex-col items-center">
      <div className="md:w-48 w-28 h-12 rounded-lg border-2 order-gray-300 px-4 text-white">
        <p className="font-bold text-center pt-2">{name}</p>
      </div>
      {rounds.map((round) => (
        <ScoreInputs
          updatePlayerScore={updatePlayerScore}
          round={round}
          number={number}
          key={`${number}-${round}`}
        />
      ))}
    </div>
  );
}
