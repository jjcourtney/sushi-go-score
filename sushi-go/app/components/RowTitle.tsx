export default function RowTitle() {
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
