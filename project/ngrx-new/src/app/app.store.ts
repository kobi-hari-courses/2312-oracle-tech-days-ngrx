import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { QuizState } from "./models/quiz-state.model";
import { QUESTIONS } from "./data/questions";
import { computed } from "@angular/core";
import { computeMsgId } from "@angular/compiler";
import { withDevtools } from "./custom-features/with-devtools.feature";

export const initialQuizState: QuizState = {
    questions: QUESTIONS, 
    answers: []
};


export const QuizStore = signalStore(
    withState(initialQuizState), 
    withDevtools('My Quiz'),
    withComputed(({questions, answers}) => ({
        indexOfCurrentQuestion: computed(() => answers().length), 
        questionsCount: computed(() => questions().length),
        isDone: computed(() => answers().length === questions().length), 
        correctCount: computed(() => answers().filter(a => a.isCorrect).length)
    })),
    withComputed(({indexOfCurrentQuestion, questions}) => ({
        currentQuestion: computed(() => questions()[indexOfCurrentQuestion()]), 
    })), 
    withMethods(store => ({
        restart() {
            store.update({type: 'restart'}, initialQuizState);
        }, 
        answerCurrentQuestion(answer: number) {
            const isCorrect = (store.currentQuestion().correctIndex === answer);
            store.update({type: 'answer question', answer}, state => ({
                answers: [...state.answers, {
                    userAnswer: answer, 
                    isCorrect
                }]
            }))
        }
    }))
);

