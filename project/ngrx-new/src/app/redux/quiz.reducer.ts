import { createReducer, on } from '@ngrx/store';
import { initialQuizState } from './quiz.state';
import { userActions } from './users.actions';
import { currentQuestionFromState } from './quiz.helpers';

export const quizReducer = createReducer(
  initialQuizState,
  on(userActions.restart, state => ({
    ...state, 
    answers: [],
  })), 
  on(userActions.answerCurrentQuestion, (state, action) => ({
    ...state, 
    answers: [...state.answers, {
        userAnswer: action.userAnswer, 
        isCorrect: currentQuestionFromState(state).correctIndex === action.userAnswer
    }]
  }))
);
