import { QUESTIONS } from "../data/questions";
import { QuizState } from "../models/quiz-state.model";

export const initialQuizState: QuizState = {
    questions: QUESTIONS, 
    answers: []
}