import { createReducer } from "@ngrx/store";
import { initialQuizState } from "./quiz.state";

export const quizReducer = createReducer(initialQuizState);