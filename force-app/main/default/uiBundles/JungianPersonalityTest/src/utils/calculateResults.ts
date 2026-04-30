export interface ResultData {
  dominantFunction: string;
  auxiliaryFunction: string;
  tertiaryFunction: string;
  inferiorFunction: string;
  scores: {
    extroverted: number;
    introverted: number;
    thinking: number;
    feeling: number;
    intuition: number;
    sensing: number;
  };
  attitude: string;
}

export function calculateResults(
  answers: Array<{ classification: string }>
): ResultData {
  const scores = {
    extroverted: 0,
    introverted: 0,
    thinking: 0,
    feeling: 0,
    intuition: 0,
    sensing: 0,
  };

  // Count classifications
  answers.forEach(answer => {
    const classification = answer.classification.toLowerCase().replace(/\s+/g, '');
    if (classification in scores) {
      scores[classification as keyof typeof scores]++;
    }
  });

  // Calculate percentages
  const total = answers.length;
  const percentages = Object.entries(scores).reduce((acc, [key, value]) => {
    acc[key as keyof typeof scores] = Math.round((value / total) * 100);
    return acc;
  }, {} as typeof scores);

  // Determine attitude
  const attitude = scores.extroverted > scores.introverted ? 'Extroverted' : 'Introverted';
  // const oppositeAttitude = attitude === 'Extroverted' ? 'Introverted' : 'Extroverted';

  // Rank cognitive functions
  const functions = [
    { name: 'Intuition', score: scores.intuition },
    { name: 'Sensing', score: scores.sensing },
    { name: 'Thinking', score: scores.thinking },
    { name: 'Feeling', score: scores.feeling },
  ].sort((a, b) => b.score - a.score);
  
  // Assign prefixes based on attitude (alternate between primary and opposite)
  // const rankedFunctions = functions.map((func, index) => {
    // const prefix = index % 2 === 0 ? attitude : oppositeAttitude;
    // return `${prefix} ${func.name}`;
    const rankedFunctions = functions.map((func) => {
    return `${func.name}`;
  });

  return {
    dominantFunction: rankedFunctions[0],
    auxiliaryFunction: rankedFunctions[1],
    tertiaryFunction: rankedFunctions[2],
    inferiorFunction: rankedFunctions[3],
    scores: percentages,
    attitude,
  };
}