export const calculateScores = (scores: number[][]) => {
  const firstRoundScores = scores.map((score) => score[0]);

  const highScoreIndex = getHighestScore(firstRoundScores);
  console.log(highScoreIndex);
  return highScoreIndex;
};

// Find out who has the highest score in round 1 they get given 6 points if there is a tie then they get the point divided between them.

// Get the first value of each array and compare them to each other

function getHighestScore(scores: number[]) {
  const highestScore = Math.max(...scores);
  const indexOfHighestScore = scores.indexOf(highestScore);

  return indexOfHighestScore;
}
