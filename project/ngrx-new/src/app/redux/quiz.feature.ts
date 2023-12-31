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
    const questionsCount = createSelector(selectQuestions, (all) => all.length);
    return {
      selectCurrentQuestionIndex,
      selectCurrentQuestion,
      questionsCount,
      isQuizDone: createSelector(
        selectQuestions,
        selectAnswers,
        (questions, answers) => questions.length === answers.length
      ),
      correctCount: createSelector(
        selectAnswers,
        (all) => all.filter((a) => a.isCorrect).length
      ),
    };
  },
});
