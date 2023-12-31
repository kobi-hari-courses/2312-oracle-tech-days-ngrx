import { Actions, createEffect, ofType } from "@ngrx/effects";
import { userActions } from "./users.actions";
import { exhaustAll, exhaustMap, map, of } from "rxjs";
import { inject } from "@angular/core";
import { ColorQuizGeneratorService } from "../services/color-quiz-generator.service";
import { serviceActions } from "./service.actions";

export const generateQuestionsEffect = createEffect(() => {
    const actions = inject(Actions);
    const service = inject(ColorQuizGeneratorService);

    const res = actions.pipe(
        ofType(userActions.generateQuiz), 
        exhaustMap(a => service.createRandomQuiz()), 
        map(questions => serviceActions.quizGenerated({questions}))
    );
    return res;
}, 
{functional: true});