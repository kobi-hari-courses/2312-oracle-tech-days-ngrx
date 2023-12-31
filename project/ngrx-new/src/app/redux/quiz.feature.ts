import { createFeature } from "@ngrx/store";
import { quizReducer } from "./quiz.reducer";

export const quizFeature = createFeature({
    name: 'quiz', 
    reducer: quizReducer
});