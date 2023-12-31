import { createActionGroup, props } from "@ngrx/store";
import { Question } from "../models/question.model";

export const serviceActions = createActionGroup({
    source: 'SERVICE', 
    events: {
        'quiz generated': props<{questions: Question[]}>()
    }
})