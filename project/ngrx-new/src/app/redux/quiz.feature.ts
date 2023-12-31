import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { quizReducer } from './quiz.reducer';
import { QuizState } from '../models/quiz-state.model';

export const quizFeature = createFeature({
  name: 'quiz',
  reducer: quizReducer,
  extraSelectors: ({ selectAnswers, selectQuestions }) => {
    const selectCurrentQuestionIndex = createSelector(
      selectAnswers,
      (all) => all.length
    );
    const selectCurrentQuestion = createSelector(
      selectQuestions,
      selectCurrentQuestionIndex,
      (all, index) => all[index]
    );
    return {
        selectCurrentQuestionIndex, 
        selectCurrentQuestion
    };
  },
});
