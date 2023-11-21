type ScoreInputsProps = {
  round: number | string;
  number: number;
  updatePlayerScore: (e: any) => void;
};

export default function ScoreInputs({
  round,
  number,
  updatePlayerScore,
}: ScoreInputsProps) {
  return (
    <input
      className="md:w-48 w-28 h-12 rounded-lg border-2 border-gray-300 px-4  text-zinc-900"
      placeholder="0"
      type="number"
      id={`player-${number}-round-${round}`}
      onChange={(e) => {
        updatePlayerScore(e);
      }}
    />
  );
}
