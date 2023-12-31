import { Question } from "../models/question.model";
import { QuizState } from "../models/quiz-state.model";

export function currentQuestionFromState(state: QuizState): Question {
    const index = state.answers.length;
    return state.questions[index];
}