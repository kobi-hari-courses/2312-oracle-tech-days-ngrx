import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { quizFeature } from './redux/quiz.feature';
import { provideEffects } from '@ngrx/effects';
import { generateQuestionsEffect } from './redux/quiz.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
  provideAnimations(), 
  provideStore(), 
  provideStoreDevtools(),
  provideState(quizFeature), 
  provideEffects({
    generateNewQuiz: generateQuestionsEffect
  })

]
};
