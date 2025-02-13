import { RoundType } from "@/types/InterviewData"

const selectRoundAndTimeLimit = (questionIndex: number): { round: RoundType, timeLimit: number } => {
  if (questionIndex >= 0 && questionIndex <= 2) return { round: "aptitude", timeLimit: 60 }
  if (questionIndex >= 3 && questionIndex <= 5) return { round: "behavioral", timeLimit: 60 }
  if (questionIndex >= 6 && questionIndex <= 8) return { round: "technical", timeLimit: 180 }
  return { round: "system-design", timeLimit: 180 }
}

export default selectRoundAndTimeLimit