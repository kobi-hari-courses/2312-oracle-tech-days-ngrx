import { Answer } from "./answer.model";
import { Question } from "./question.model";

export interface QuizState {
    readonly questions: Question[], 
    readonly answers: Answer[]
}