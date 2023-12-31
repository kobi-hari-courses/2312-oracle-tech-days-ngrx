import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const userActions = createActionGroup({
    source: 'USER', 
    events: {
        'restart': emptyProps(), 
        'answer current question': props<{userAnswer: number}>(), 
        'generate quiz': emptyProps()
    }
});

